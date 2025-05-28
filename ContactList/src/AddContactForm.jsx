function AddContactForm() {
  return (
    <form className="add-contact-form">
      <input value={"hoten"} placeholder="Họ Tên" />
      <input value={"sdt"} placeholder="Số điện thoại" />
      <button type="submit">Lưu</button>
    </form>
  );
}

export default AddContactForm;