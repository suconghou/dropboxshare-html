const host = ""

export const getList = async () => {
    const res = await fetch(`${host}/stream/`)
    return res.json();
}