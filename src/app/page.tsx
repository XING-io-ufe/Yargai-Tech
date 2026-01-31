import { ContactForm } from "@/components/ContactForm";

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
    return (
        <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-widest text-white/60">{eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
            {description ? (
                <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">{description}</p>
            ) : null}
        </div>
    );
}

function Card({ title, description }: { title: string; description: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/70">{description}</p>
        </div>
    );
}

export default function Home() {
    return (
        <div className="min-h-screen bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(124,58,237,0.16),transparent_55%),radial-gradient(900px_circle_at_85%_20%,rgba(0,191,166,0.16),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_45%)]">
            <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                    <div className="text-sm font-semibold tracking-tight text-white">Yargaitech</div>
                    <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
                        <a className="hover:text-white" href="#services">
                            Үйлчилгээ
                        </a>
                        <a className="hover:text-white" href="#pricing">
                            Үнэ
                        </a>
                        <a className="hover:text-white" href="#about">
                            Бидний тухай
                        </a>
                        <a className="hover:text-white" href="#faq">
                            FAQ
                        </a>
                    </nav>
                    <a
                        className="inline-flex h-10 items-center justify-center rounded-full bg-(--accent-500) px-5 text-sm font-semibold text-black"
                        href="#contact"
                    >
                        Төсөл эхлүүлэх
                    </a>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-5">
                {/* HERO */}
                <section className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-white/60">ТӨСӨӨЛЛӨӨС ДАВСАН ТЕХНОЛОГИ</p>
                        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                            Бизнест тань зориулсан урт хугацааны систем.
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                            Бид зөвхөн гоёмсог вэбсайт биш — таныг унтаж байхад ч борлуулалт хийж, хэрэглэгчдэд тань туслах
                            ухаалаг автоматжуулалт, өсөх тусам өргөжих системийг угсарна.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                className="inline-flex h-12 items-center justify-center rounded-full bg-(--accent-500) px-7 font-semibold text-black"
                                href="#contact"
                            >
                                Төсөл эхлүүлэх
                            </a>
                            <a
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/3 px-7 font-semibold text-white hover:bg-white/6"
                                href="#work"
                            >
                                Бидний хийсэн ажлууд
                            </a>
                        </div>
                    </div>

                    {/* Visual placeholder for 3D */}
                    <div className="relative mx-auto aspect-square w-full max-w-md">
                        <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-white/3" />
                        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),rgba(255,255,255,0.06)_45%,transparent_70%)] blur-[0.2px]" />
                        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-black/20 shadow-[0_0_80px_rgba(0,191,166,0.15)]" />
                        <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-white/70">
                            3D (дараагийн алхам)
                        </div>
                    </div>
                </section>

                {/* TRUST ICONS */}
                <section className="grid gap-4 pb-16 sm:grid-cols-3">
                    <Card title="Хялбар" description="Техникийн нарийн зүйлсийг бид хариуцна. Танд ойлгомжтой, ажилладаг үр дүн." />
                    <Card title="Ухаалаг" description="AI туслах, автоматжуулалт, интеграцууд — таны өмнөөс ажиллах систем." />
                    <Card title="Урт хугацааны" description="Өсөх тусам хамт тэлэх архитектур. Нэг удаа хийгээд хаях шийдэл биш." />
                </section>

                {/* SERVICES */}
                <section id="services" className="py-16">
                    <SectionTitle
                        eyebrow="ҮЙЛЧИЛГЭЭ"
                        title="Таны бизнесийг хурдасгах шийдлүүд"
                        description="AI айдас биш — ашиг. Давтагддаг ажлыг системд даатгаж, багийнхаа цагийг чөлөөлнө."
                    />

                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        <Card
                            title="24/7 Ухаалаг туслах (AI Chatbot)"
                            description="Асуултад хариулж, захиалга авч, гомдлыг барагдуулна — яг л таны шилдэг борлуулагч шиг."
                        />
                        <Card
                            title="E-commerce автоматжуулалт"
                            description="Захиалга, төлбөр, хүргэлт — хүний оролцоог багасгаж, алдааг бууруулна."
                        />
                        <Card
                            title="Web Development"
                            description="Зөвхөн гоё биш — хурд, SEO, хөрвүүлэлт (conversion)-д чиглэсэн вэбсайт."
                        />
                        <Card
                            title="SaaS + 3D Web"
                            description="Өөрийн систем, хэрэглэгчийн платформ, 3D туршлага — онцлогтой, өргөжих боломжтой шийдэл."
                        />
                    </div>
                </section>

                {/* WHY */}
                <section className="py-16">
                    <SectionTitle
                        eyebrow="ЯАГААД БИД"
                        title="Бид хүнд зүйлийг хялбар болгодог"
                        description="Технологийн нэр томьёо биш — ойлгомжтой үр дүн, хэмжигдэхүйц ахиц."
                    />

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        <Card
                            title="Ойлгомжтой үр дүн"
                            description="Юу хийх, яагаад хийх, ямар ашиг өгөх — бүгд нь ил тод."
                        />
                        <Card
                            title="Ирээдүйд оруулж буй хөрөнгө"
                            description="Систем тань бизнес өсөхийн хэрээр хамт томорно."
                        />
                        <Card
                            title="Бүгд нэг дор"
                            description="Вэбсайт + AI туслах + онлайн борлуулалт — нэг цогц “тархи” болж уялдана."
                        />
                    </div>
                </section>

                {/* WORK (placeholder) */}
                <section id="work" className="py-16">
                    <SectionTitle
                        eyebrow="ПОРТФОЛИО"
                        title="Хийсэн ажлууд (удахгүй)"
                        description="Кейсүүд дээр KPI/үр дүн (хурд, хөрвүүлэлт, автоматжуулалтын хэмнэлт) харуулна."
                    />
                </section>

                {/* PRICING */}
                <section id="pricing" className="py-16">
                    <SectionTitle
                        eyebrow="ҮНИЙН САНАЛ"
                        title="Юу авч, ямар үнэтэйг тодорхой"
                        description="Доорх нь эхлэх үнэ. Эцсийн үнэ нь төслийн цар хүрээ, төвөгтэй байдлаас хамаарна."
                    />

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <Card title="Web Development" description="5,000,000₮-өөс · 4–6 долоо хоног" />
                        <Card title="AI & Automation" description="10,000,000₮-өөс · цар хүрээнээс хамаарна" />
                        <Card title="3D Web Experience" description="15,000,000₮-өөс · 6–8 долоо хоног" />
                        <Card title="SaaS Platforms" description="25,000,000₮-өөс · 3–6 сар" />
                    </div>

                    <p className="mt-6 text-center text-sm text-white/60">
                        Дээрх үнүүд нь төслийн нарийн төвөгтэй байдлаас хамаарч өөрчлөгдөх боломжтой.
                    </p>
                </section>

                {/* PROCESS */}
                <section className="py-16">
                    <SectionTitle
                        eyebrow="ПРОЦЕСС"
                        title="Бид хэрхэн ажилладаг вэ?"
                        description="Хүсэлт илгээснээс эхлээд төслийг эхлүүлэх хүртэлх алхмууд."
                    />

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <Card title="1) Хүсэлт хүлээн авах" description="Манай баг 24 цагийн дотор танилцана." />
                        <Card title="2) Үнэгүй зөвлөгөө" description="Таны бизнест тохирох шийдлийг санал болгоно." />
                        <Card title="3) Төлөвлөгөө + үнийн санал" description="Яг танд зориулсан урт хугацааны төлөвлөгөө." />
                        <Card title="4) Ажил эхлэх" description="Тодорхой болсны дараа албан ёсоор эхлүүлнэ." />
                    </div>
                </section>

                {/* ABOUT */}
                <section id="about" className="py-16">
                    <SectionTitle
                        eyebrow="БИДНИЙ ТУХАЙ"
                        title="Yargaitech: Хурд, Ирээдүй, Хязгааргүй боломж"
                        description="“Yargai” нь тэсвэр хатуужил, хурд, шийдэмгий байдлын илэрхийлэл. Бид энэ үнэт зүйлийг Tech-тэй нэгтгэн “дижитал тархи” бүтээнэ."
                    />
                </section>

                {/* FAQ */}
                <section id="faq" className="py-16">
                    <SectionTitle
                        eyebrow="FAQ"
                        title="Таны мэдэхийг хүссэн зүйлс"
                        description="Ил тод, нээлттэй харилцааг эрхэмлэнэ."
                    />

                    <div className="mt-10 grid gap-4">
                        <Card
                            title="Систем бэлэн болсны дараа хэн дэмжих вэ?"
                            description="Төсөл бүрт эхний 3–6 сарын техникийн үнэгүй дэмжлэг багтана. Дараа нь арчилгааны багц санал болгоно."
                        />
                        <Card
                            title="Би өөрөө контент нэмж, засаж чадах уу?"
                            description="Тийм. CMS (Sanity, Strapi гэх мэт)-тэй холбож өгнө. Мөн сургалт, гарын авлага бэлдэнэ."
                        />
                        <Card
                            title="Код, оюуны өмч хэнд хадгалагдах вэ?"
                            description="Гэрээний дагуу төлбөр бүрэн хийгдвэл бүх код, оюуны өмч таны эзэмшилд шилжинэ."
                        />
                        <Card
                            title="Төлбөрийн нөхцөл ямар байдаг вэ?"
                            description="Ихэвчлэн 40% / 40% / 20% (эхлэхэд / хөгжүүлэлт / хүлээлгэн өгөх). Том SaaS дээр уян хатан."
                        />
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="py-16">
                    <SectionTitle
                        eyebrow="ХОЛБОО БАРИХ"
                        title="Хамтдаа ирээдүйг бүтээцгээе"
                        description="Танд санаа байна уу? Эсвэл хаанаас эхлэхээ мэдэхгүй байна уу? Мэдээллээ үлдээгээрэй — үнэ төлбөргүй зөвлөнө."
                    />

                    <div className="mt-10 grid gap-8 lg:grid-cols-2">
                        <ContactForm />

                        <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
                            <h3 className="text-lg font-semibold text-white">Итгэл төрүүлэх жижиг зүйлс</h3>
                            <ul className="mt-4 space-y-3 text-sm text-white/70">
                                <li>“Бид таны цагийг хүндэтгэнэ” — хэрэгтэй шийдлээ л ярилцъя.</li>
                                <li>“Технологийн түнш” — зөвхөн гүйцэтгэгч биш, урт хугацааны хамтрагч.</li>
                                <li>Хариу өгөх хугацаа: 24 цагийн дотор.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
                    © {new Date().getFullYear()} Yargaitech. All rights reserved.
                </footer>
            </main>
        </div>
    );
}
