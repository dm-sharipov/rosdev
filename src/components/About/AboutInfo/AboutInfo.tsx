import { FC } from "react";
import classNames from "classnames";
import styles from "./AboutInfo.module.scss";
import { ABOUT_INFO } from "@/consts/About";

interface AboutInfoProps {
    className?: string;
}

export const AboutInfo: FC<AboutInfoProps> = ({ className }) => {
    if (!ABOUT_INFO?.length) return null;

    return (
        <ul className={classNames(className, styles.aboutInfo, "listReset")}>
            {ABOUT_INFO.map(({ title, text, icon }) => (
                <li
                    className={styles.aboutInfo__item}
                    key={title}
                >
                    <svg
                        className={styles.aboutInfo__icon}
                        width="44"
                        height="44"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <use href={`/img/sprite.svg#${icon}`} />
                    </svg>

                    <div>
                        <p className={styles.aboutInfo__title}>{title}</p>

                        <p className={styles.aboutInfo__text}>{text}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};
