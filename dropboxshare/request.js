const host = ""

export const getList = async (path) => {
    const res = await fetch(`${host}/files${path}`)
    return res.json();
}