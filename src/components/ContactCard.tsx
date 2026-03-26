import Contact from "../types/contact";

export default function ContactCard({ contact }: { contact: Contact }) {
    return (
        <a
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-6 rounded-lg shadow-md border border-transparent hover:shadow-xl hover:-translate-y-1 hover:border-primary transition-all duration-300 flex flex-col items-center text-center w-full"
        >
            <h3 className="text-xl font-semibold mb-2">{contact.Methodtitle}</h3>
            <p className="text-foreground/80">{contact.Myname}</p>
        </a>
    );
}