import { fetchUsers } from '@/utils/api';
import styles from '../styles/TA10.module.css'

function TA10({ users = {} }) {
    return (
        <>
            <div className="container">
                <div className={styles.ta10}>
                    <h1>TA 10</h1>

                    <h2>{users != {} ? "Users from API" : "No data from API"}</h2>

                    <ul className={styles.ta10__users}>
                        {users.map((user, index) => (
                            <li key={index}>
                                <h2>{user.name}</h2>
                                <p>{user.email}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TA10;

export async function getServerSideProps() {
    const users = await fetchUsers().catch((err) => {console.error(err); return [];});
    return { props: { users: (users != undefined ? users : []) } }
}