export const searchAccounts = async () => {

    // localstorage??
    const response = await fetch("http://localhost:3000/api/accounts");
    const res = await response.json();
    return res;
}