import React from 'react';
import styles from './Table.module.css';

export default function Table({ data, columns , keys}) {
  const totalRows = 10; // Set the total number of rows you want to show (can be adjusted)
  const emptyRows = totalRows - data.length; // Calculate how many empty rows to add
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {keys.map((col) => (
                <td key={col}>{row[col] || '-'}</td>
              ))}
            </tr>
          ))}
          {/* Adding empty rows if needed */}
          {Array.from({ length: emptyRows }).map((_, index) => (
            <tr key={index} className={styles.emptyRow}>
              {columns.map((col, i) => (
                <td key={i}>&nbsp;</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
