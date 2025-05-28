function AddContactForm() {
  return (
    <form className="add-contact-form" style={{ display: "flex", flexDirection: "column",  gap: "10px" }}>
      <label htmlFor="inform">Thông tin bổ sung</label>
      <input value={"hoten"} placeholder="Họ Tên" />
      <input value={"sdt"} placeholder="Số điện thoại" />
      <input value={"email"} placeholder="Email" />
      <button type="submit">Lưu</button>
    </form>
  );
}

export default AddContactForm;