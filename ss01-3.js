const createUser = (name, age = 18, role = "user") => {
    console.log(name, age, role);
};
createUser("dev");
createUser("Nguyễn Văn A", 20, "admin")