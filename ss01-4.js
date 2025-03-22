const sendMail = (name , companyName) => {
    const textMail = `
Dear[${name}],
Thank you for purchasing our product. We hope you enjoy it.
Best regards,
[Your ${companyName}]
`
console.log(textMail);
};
sendMail("Luyen" , "Rikkei");


