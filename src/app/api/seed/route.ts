
import { NextResponse } from 'next/server';
import { services, locations, blogPosts } from '@/lib/site-data';
import { writeClient } from '@/sanity/lib/write-client';

export async function GET() {
    try {
        console.log('Seeding data...');

        // Services
        for (const service of services) {
            console.log(`Processing service: ${service.name}`);
            const existing = await writeClient.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug: service.slug });
            if (!existing) {
                // Handle image upload if exists
                let imageAsset;
                if (service.image) {
                    // In real scenario we'd fetch the image data from public folder and upload.
                    // For now, let's skip image upload logic or simulate it if simple.
                    // Actually, we can fetch local file if running server-side?
                    // Or fetch from current running URL if available?
                    // Let's stick to text data first.
                }

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
