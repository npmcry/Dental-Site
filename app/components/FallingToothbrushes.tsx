"use client";
import { TbDental } from 'react-icons/tb';
import styles from './FallingToothbrushes.module.css';

const FallingToothbrushes = () => {
    const toothbrushes = [...Array(20)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 10}s`,
        size: `${Math.random() * 25 + 25}px`,
        delay: `${Math.random() * 5}s`,  // Reduced max delay from 10s to 5s
        rotate: Math.random() * 360,
        top: `${Math.random() * -50}%`  // Added initial top position
    }));

    return (
        <div className="fixed inset-0 pointer-events-none">
            {toothbrushes.map(brush => (
                <TbDental
                    key={brush.id}
                    className={styles.toothbrush}
                    style={{
                        left: brush.left,
                        top: brush.top,  // Added initial top position
                        animationDuration: brush.animationDuration,
                        fontSize: brush.size,
                        animationDelay: brush.delay,
                        transform: `rotate(${brush.rotate}deg)`
                    }}
                />
            ))}
        </div>
    );
};

export default FallingToothbrushes;