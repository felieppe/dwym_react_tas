import styles from '../styles/components/ThemeDisplay.module.css'

import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '@/pages/_app';

function ThemeDisplay() {
    const { theme } = useContext(ThemeContext);

    const activity = [
        {
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qAct7NYVfH41zFDEp-5hO5nKdTpUsOnIcfFQxFQWUSOq89jDsrCaKUDzmyys0HROkhQ&usqp=CAU",
            name: "John Doe",
            date: "Sep 18, 2024",
            amount: "$ 236.55"
        },
        {
            profile: "https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/657236350931ee4538eea52c/65baf15103d8ad2826032a8a/1725905528869/how-to-stop-being-a-people-pleaser-1_1.jpg?format=1500w",
            name: "Jack Doe",
            date: "Aug 30, 2024",
            amount: "$ 943.00"
        },
        {
            profile: "https://i3.wp.com/s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg",
            name: "Will Doe",
            date: "Aug 10, 2024",
            amount: "$ 125.23"
        },
        {
            profile: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSPk1YlfuFcRAXigMtH0mlNUYd4PU04kjrKgR1lbIljGzZWj0p0",
            name: "Pedro Doe",
            date: "Jul 31, 2024",
            amount: "$ 50.24"
        },
        {
            profile: "https://www.wpp.com/-/media/project/wpp/images/news/lindsey-pattison_october-2023_hero.jpg?width=900&height=506",
            name: "Luna Doe",
            date: "Jul 24, 2024",
            amount: "$ 87.23"
        }
    ]

    return (
        <div className={theme == 'light' ? `${styles.themeDisplay} ${styles.theme__light}` : `${styles.themeDisplay} ${styles.theme__dark}`}>
            <div className={styles.themeDisplay__header}>
                Recent Activities
            </div>

            <ul className={styles.themeDisplay__content}>
                {activity.map((item, index) => {
                    return (
                        <li key={index} className={styles.themeDisplay__activity}>
                            <div className={styles.activity__photo}>
                                <Image src={item.profile} alt="profile" width={60} height={60} />
                            </div>
                            <div className={styles.activity__data}>
                                <div className={theme == 'light' ? `${styles.activity__data__name} ${styles.theme__light}` : `${styles.activity__data__name} ${styles.theme__dark}`}>{item.name}</div>
                                <div className={styles.activity__data__date}>{item.date}</div>
                            </div>
                            <div className={styles.activity__amount}>
                                {item.amount}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ThemeDisplay;