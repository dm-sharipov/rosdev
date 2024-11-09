import classNames from "classnames";
import styles from "./AboutStatistics.module.scss";
import { ABOUT_STATISTICS } from "@/consts/About.js";

export const AboutStatistics = ({ className }) => {
    if (!ABOUT_STATISTICS?.length) return null;

    return (
        <ul className={classNames(className, styles.aboutStatistics, "listReset")}>
            {ABOUT_STATISTICS.map(({ value, text }) => (
                <li
                    className={styles.aboutStatistics__item}
                    key={text}
                >
                    <p
                        className={styles.aboutStatistics__title}
                        dangerouslySetInnerHTML={{ __html: value }}
                    />

                    <p className={styles.aboutStatistics__text}>{text}</p>
                </li>
            ))}
        </ul>
    );
};
