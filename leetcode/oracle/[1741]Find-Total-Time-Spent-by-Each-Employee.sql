/* Write your PL/SQL query statement below */

 select 
  TO_CHAR(event_day,'YYYY-MM-DD') as day,
  emp_id,
  sum(out_time - in_time) as total_time
  from Employees
  group by emp_id, event_day
  order by emp_id;