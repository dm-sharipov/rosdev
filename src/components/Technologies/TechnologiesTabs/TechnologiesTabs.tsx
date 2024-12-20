import { FC } from "react";
import classNames from "classnames";
import styles from "./TechnologiesTabs.module.scss";
import { TECHNOLOGIES, TechnologyCategory } from "@/consts/Technologies";

interface TechnologiesCategoryProps {
    className?: string;
    currentTab: TechnologyCategory;
    onChange: (category: TechnologyCategory) => void;
}

export const TechnologiesTabs: FC<TechnologiesCategoryProps> = ({ className, currentTab, onChange }) => {
    return (
        <fieldset className={classNames(className, styles.technologiesTabs)}>
            <legend className="visuallyHidden">Направление</legend>

            {Object.keys(TECHNOLOGIES).map((technology: TechnologyCategory) => {
                const id = `technologies-${technology}`;

                return (
                    <p
                        className={styles.technologiesTabs__item}
                        key={technology}
                    >
                        <input
                            className={classNames(styles.technologiesTabs__input, "visuallyHidden")}
                            id={id}
                            type="radio"
                            name="technologies"
                            value={technology}
                            checked={technology === currentTab}
                            onChange={() => onChange(technology)}
                        />

                        <label
                            className={styles.technologiesTabs__label}
                            htmlFor={id}
                        >
                            {technology}
                        </label>
                    </p>
                );
            })}
        </fieldset>
    );
};
