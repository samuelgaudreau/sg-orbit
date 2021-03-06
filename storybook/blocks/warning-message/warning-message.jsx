import styles from "./warning-message.module.css";

import { InfoIcon } from "@orbit-ui/react-icons";
import { Message } from "semantic-ui-react";

export function WarningMessage({ children }) {
    return (
        <Message warning size="small" className="flex items-center">
            <span className={`flex items-center self-start ${styles.icon}`}>
                <InfoIcon />
            </span>
            <div className={styles.content}>{children}</div>
        </Message>
    );
}
