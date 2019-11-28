const host = "http://share.suconghou.cn"

export const getList = async (path) => {
    const res = await fetch(`${host}/files${path}`)
    return res.json();
}