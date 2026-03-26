import ContactCard from "./ContactCard";
import contacts from "../data/contacts";

export default function ContactList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {contacts.map((contact, index) => (
                <ContactCard key={index} contact={contact} />
            ))}
        </div>
    );
}