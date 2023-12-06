module.exports = {
    empList : `SELECT e.emp_no, 
                    e.first_name,
                    e.last_name,
                    e.gender,
                    e.hire_date,
                    s.salary,
                    d.dept_no,
                    d.dept_name
                FROM employees e JOIN dept_emp h
                            ON(e.emp_no = h.emp_no)
                            JOIN departments d
                            ON (h.dept_no = d.dept_no)
                            JOIN salaries s
                            ON(e.emp_no = s.emp_no)
                WHERE h.to_date = CAST('9999-01-01' AS DATE)
                AND s.to_date = CAST('9999-01-01' AS DATE)                
                ORDER BY e.emp_no
                LIMIT 0,10;`,
    empInfo : `SELECT e.emp_no, 
                    e.first_name,
                    e.last_name,
                    e.gender,
                    e.hire_date,
                    s.salary,
                    d.dept_no,
                    d.dept_name
                FROM employees e JOIN dept_emp h
                            ON(e.emp_no = h.emp_no)
                            JOIN departments d
                            ON (h.dept_no = d.dept_no)
                            JOIN salaries s
                            ON(e.emp_no = s.emp_no)
                WHERE h.to_date = CAST('9999-01-01' AS DATE)
                AND s.to_date = CAST('9999-01-01' AS DATE)                
                AND e.emp_no = ?`,
    empInsert: ``,
    empUpdate: `UPDATE employees 
                SET first_name = 'kildong', last_name='Hong',gender='M', hire_date='2023-12-06' 
                WHERE emp_no=?`,
    empDelete: ``
}