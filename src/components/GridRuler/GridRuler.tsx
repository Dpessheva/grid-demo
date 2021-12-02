import { FunctionComponent } from "react"
import styles from './GridRuler.module.scss';
import cn from 'classnames';

type Spacing = 'sm' | 'md' | 'lg';

const GridRuler: FunctionComponent<{  spacing?:Spacing }> = ({spacing}) => {
    const classNames = cn(styles.GridRuler,{
        [styles[`GridRuler_spacing_${spacing}`]]:spacing
    });
    return (
        <div className={classNames}>
            {Array.from(Array(12).keys()).map((number => <div className={styles.GridRuler_item} key={number}></div>))}  
        </div>
    )
}

export default GridRuler;
