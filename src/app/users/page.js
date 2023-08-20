import Link from "next/link"

async function fetchData() {
    const RESPONSE = await fetch("https://dummyjson.com/users")
    return RESPONSE
}

async function page() {

    let FETCHED_DATA = await fetchData()
    FETCHED_DATA = await FETCHED_DATA.json()
    const users = FETCHED_DATA.users

    return (
        <div>
            {
                users.map((val) => {
                    return (
                        <div key={val.id}>
                            <Link href={`/users/${val.id}`}>{val.firstName}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default page