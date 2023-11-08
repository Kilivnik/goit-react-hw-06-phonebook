function ContactItem({ name, number, onDeleteContact }) {
  return (
    <>
      <li key={name}>
        <p>
          {name}: {number}
        </p>
      </li>
    </>
  );
}

export default ContactItem;
