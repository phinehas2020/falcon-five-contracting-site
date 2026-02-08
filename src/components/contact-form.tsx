'use client';

import { useActionState } from 'react';
import { createLead } from '@/app/actions';
import { siteConfig } from '@/lib/site-data';

const initialState = {
    message: '',
    success: false,
}; // This matches the return type of createLead (modified slightly below)

export function ContactForm() {
    const [state, formAction, isPending] = useActionState(async (prev: any, formData: FormData) => {
        const result = await createLead(formData);
        return result;
    }, initialState);

    if (state?.success) {
        return (
            <div className="border border-green-500 bg-green-50/10 p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Request Received</h3>
                <p className="mt-2 text-neutral-400">
                    We&apos;ll be in touch shortly. For emergencies, please call dispatch immediately.
                </p>
            </div>
        );
    }

    return (
        <div className="border border-rule bg-surface-raised p-6 sm:p-8">
            <h2 className="text-2xl text-white sm:text-3xl">
                Request Service
            </h2>
            <p className="mt-3 text-sm text-neutral-500">
                Tell us what&apos;s going on and we&apos;ll get back to you.
            </p>

            <form className="mt-6 grid gap-5" action={formAction}>
                <label className="grid gap-2 text-sm font-medium text-neutral-300">
                    Full Name
                    <input
                        type="text"
                        name="name"
                        placeholder="Jane Smith"
                        required
                        className="h-12 border border-rule bg-surface px-4 text-sm text-white placeholder:text-neutral-600"
                    />
                </label>

                <label className="grid gap-2 text-sm font-medium text-neutral-300">
                    Phone Number
                    <input
                        type="tel"
                        name="phone"
                        placeholder="(254) 555-0105"
                        required
                        className="h-12 border border-rule bg-surface px-4 text-sm text-white placeholder:text-neutral-600"
                    />
                </label>

                <label className="grid gap-2 text-sm font-medium text-neutral-300">
                    Service Type
                    <select
                        name="serviceType"
                        className="h-12 border border-rule bg-surface px-4 text-sm text-white"
                    >
                        <option>Emergency Plumbing</option>
                        <option>Air Conditioning Repair</option>
                        <option>Water Heater Service</option>
                        <option>Drain &amp; Sewer Service</option>
                        <option>General Contractor Service</option>
                    </select>
                </label>

                <label className="grid gap-2 text-sm font-medium text-neutral-300">
                    Service City
                    <select
                        name="city"
                        className="h-12 border border-rule bg-surface px-4 text-sm text-white"
                    >
                        {siteConfig.areas.map((city) => (
                            <option key={city}>{city}</option>
                        ))}
                    </select>
                </label>

                <label className="grid gap-2 text-sm font-medium text-neutral-300">
                    What&apos;s happening?
                    <textarea
                        name="message"
                        rows={4}
                        placeholder="Describe the issue and urgency."
                        className="border border-rule bg-surface px-4 py-3 text-sm text-white placeholder:text-neutral-600"
                    />
                </label>

                <button
                    type="submit"
                    disabled={isPending}
                    className="h-12 bg-gold text-sm font-bold text-black transition-colors hover:bg-gold-bright disabled:opacity-50"
                >
                    {isPending ? 'Submitting...' : 'Submit Request'}
                </button>
                {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
            </form>
        </div>
    );
}
