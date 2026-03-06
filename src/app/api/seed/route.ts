
import { NextRequest, NextResponse } from 'next/server';
import { services, locations, blogPosts } from '@/lib/site-data';
import { writeClient } from '@/sanity/lib/write-client';

export async function GET(request: NextRequest) {
    try {
        const expectedSecret = process.env.SEED_API_SECRET;
        const bearerToken = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
        const providedSecret = request.nextUrl.searchParams.get('secret') ?? bearerToken;

        if (!expectedSecret) {
            return NextResponse.json(
                { success: false, error: 'Seeding is not configured on this environment.' },
                { status: 503 }
            );
        }

        if (providedSecret !== expectedSecret) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            );
        }

        console.log('Seeding data...');

        // Services
        for (const service of services) {
            console.log(`Processing service: ${service.name}`);
            const existing = await writeClient.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug: service.slug });
            if (!existing) {
                // Handle image upload if needed in a future iteration.

                await writeClient.create({
                    _type: 'service',
                    name: service.name,
                    slug: { _type: 'slug', current: service.slug },
                    shortDescription: service.shortDescription,
                    fullDescription: service.fullDescription,
                    emergencyChecklist: service.emergencyChecklist,
                    commonProblems: service.commonProblems,
                    relatedKeywords: service.relatedKeywords,
                    faqs: service.faqs.map(f => ({ ...f, _key: f.question })), // keys needed for arrays sometimes
                    // image: imageAsset ? { _type: 'image', asset: { _ref: imageAsset._id } } : undefined
                });
                console.log(`Created service: ${service.name}`);
            } else {
                console.log(`Service already exists: ${service.name}`);
            }
        }

        // Locations
        for (const location of locations) {
            console.log(`Processing location: ${location.city}`);
            const existing = await writeClient.fetch(`*[_type == "location" && slug.current == $slug][0]`, { slug: location.slug });
            if (!existing) {
                await writeClient.create({
                    _type: 'location',
                    city: location.city,
                    slug: { _type: 'slug', current: location.slug },
                    region: location.region,
                    summary: location.summary,
                    neighborhoods: location.neighborhoods,
                    nearby: location.nearby
                });
            }
        }

        // Blog Posts
        for (const post of blogPosts) {
            console.log(`Processing post: ${post.title}`);
            const existing = await writeClient.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug: post.slug });
            if (!existing) {
                await writeClient.create({
                    _type: 'post',
                    title: post.title,
                    slug: { _type: 'slug', current: post.slug },
                    description: post.description,
                    targetKeyword: post.targetKeyword,
                    outline: post.outline
                });
            }
        }

        return NextResponse.json({ success: true, message: "Data seeded successfully!" });
    } catch (error) {
        console.error("Seeding failed:", error);
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}
