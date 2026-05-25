import { Person, WithContext } from "schema-dts";

const SITE_URL = "https://www.harshjdhv.com";
const COMPONENTRY_URL = "https://www.componentry.fun";

export default function JsonLd() {
    const jsonLd: WithContext<Person> = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Harsh Jadhav",
        alternateName: ["harshjdhv", "Harsh Jadhav"],
        givenName: "Harsh",
        familyName: "Jadhav",
        url: SITE_URL,
        jobTitle: "Software Engineer",
        knowsAbout: [
            "Software Engineering",
            "Web Application Development",
            "React UI Components",
            "User Interface Design",
            "System Architecture",
            "Frontend Development",
            "Open Source Software",
        ],
        homeLocation: {
            "@type": "Place",
            name: "Mumbai, India",
        },
        subjectOf: {
            "@type": "WebSite",
            name: "Componentry",
            url: COMPONENTRY_URL,
            description: "Componentry is a React UI component library built by Harsh Jadhav.",
        },
        affiliation: {
            "@type": "Organization",
            name: "Componentry",
            url: COMPONENTRY_URL,
        },
        sameAs: [
            "https://github.com/harshjdhv",
            "https://x.com/harshjdhv",
            "https://www.instagram.com/harshjdhv",
            "https://www.linkedin.com/in/jadhavharsh",
            COMPONENTRY_URL,
            "https://21st.dev/community/harshjdhv",
        ],
        image: `${SITE_URL}/linkbannerpreview.png`,
        description: "Harsh Jadhav, also known as harshjdhv, is a software engineer in Mumbai building Componentry, React UI components, user-facing applications, and the systems behind them.",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
