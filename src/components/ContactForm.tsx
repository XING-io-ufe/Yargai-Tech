"use client";

import { useId, useMemo, useState } from "react";

type FormState = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

const initialState: FormState = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

export function ContactForm() {
    const formId = useId();
    const [state, setState] = useState<FormState>(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const isValid = useMemo(() => {
        return state.name.trim().length > 1 && state.email.includes("@") && state.phone.trim().length >= 6;
    }, [state]);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!isValid || isSubmitting) return;

        setIsSubmitting(true);

        // TODO: connect to API route / email provider
        await new Promise((resolve) => setTimeout(resolve, 650));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setState(initialState);
    }

    return (
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <form onSubmit={onSubmit} aria-describedby={`${formId}-help`} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-white" htmlFor={`${formId}-name`}>
                        Нэр
                    </label>
                    <input
                        id={`${formId}-name`}
                        value={state.name}
                        onChange={(e) => setState((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="Таныг хэн гэж дуудах вэ?"
                        className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/40 focus:border-white/20"
                        autoComplete="name"
                        required
                    />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-white" htmlFor={`${formId}-email`}>
                            И-мэйл хаяг
                        </label>
                        <input
                            id={`${formId}-email`}
                            type="email"
                            value={state.email}
                            onChange={(e) => setState((prev) => ({ ...prev, email: e.target.value }))}
                            placeholder="Мэдээлэл илгээх хаяг"
                            className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white/20"
                            autoComplete="email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white" htmlFor={`${formId}-phone`}>
                            Утасны дугаар
                        </label>
                        <input
                            id={`${formId}-phone`}
                            value={state.phone}
                            onChange={(e) => setState((prev) => ({ ...prev, phone: e.target.value }))}
                            placeholder="Бид эргээд холбогдоход хэрэгтэй"
                            className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white/20"
                            autoComplete="tel"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-white" htmlFor={`${formId}-message`}>
                        Төслийн тухай товч (сонголтоор)
                    </label>
                    <textarea
                        id={`${formId}-message`}
                        value={state.message}
                        onChange={(e) => setState((prev) => ({ ...prev, message: e.target.value }))}
                        placeholder="Танд ямар тусламж хэрэгтэй байна вэ?"
                        className="mt-1 min-h-28 w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-white/20"
                    />
                </div>

                <p id={`${formId}-help`} className="text-sm text-white/60">
                    Бид таны илгээсэн мэдээлэлтэй 24 цагийн дотор танилцана.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        className="inline-flex h-12 items-center justify-center rounded-full bg-(--accent-500) px-6 font-semibold text-black transition-opacity disabled:opacity-50"
                    >
                        {isSubmitting ? "Илгээж байна…" : "Зөвлөгөө авах хүсэлт илгээх"}
                    </button>

                    <div className="text-sm text-white/70">
                        Эсвэл шууд: <a className="underline decoration-white/30 underline-offset-4 hover:decoration-white" href="mailto:contact@yargaitech.com">contact@yargaitech.com</a>
                    </div>
                </div>
            </form>

            <div
                className={`mt-5 rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-white transition-opacity duration-300 ${isSubmitted ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                role="status"
                aria-live="polite"
            >
                Баярлалаа! Бид удахгүй холбогдох болно.
            </div>
        </div>
    );
}
