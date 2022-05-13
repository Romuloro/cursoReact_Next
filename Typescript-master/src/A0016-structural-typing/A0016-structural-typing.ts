// Structural typing só liga para a estrutura do tipo, se atendeu ok. não liga para a identidade deles.
type User = { username: string; password: string };
type VerifyUserfn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserfn = (user, sentValue) => {
    return (
        user.username === sentValue.username &&
        user.password === sentValue.password
    );
};

const dbUser = { username: 'romulo', password: '123456' };
const sentUser = { username: 'romulo', password: '123456' };
const loggedIn = verifyUser(dbUser, sentUser);

console.log(loggedIn);

export default 1;
