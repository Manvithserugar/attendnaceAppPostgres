const INSERT_INTO_STUDENT =
  "insert into students(name, email, phone) values($1, $2, $3) returning id";

const INSERT_INTO_STUDENT_CLASS =
  "insert into student_class(student_id, class_id) values($1, $2)";

const INSERT_INTO_STUDENT_STATS =
  "insert into student_stats(student_id) values($1)";

const SELECT_STUDENT_FROM_ID =
  "select s.*, c.id as class_id from students as s, classes as c, student_class as sc where s.id = $1 and sc.student_id = s.id and c.id = sc.class_id";

const UPDATE_STUDENT_AND_STUDENT_CLASS =
  "with updated_student as (update students set name = $2, email = $3, phone = $4 where id = $1 returning id) update student_class set class_id = $5 from updated_student where student_class.student_id = updated_student.id;";

const DELETE_STUDENT = "delete from students where id = $1";

const INSERT_INTO_ATTENDANCE =
  "INSERT INTO attendance (student_id, attendance_date) VALUES %L";

const UPDATE_STUDENT_STATS =
  "update student_stats set total = total + 1, consecutive_classes = (total + 1) % 4, streak_of_four = case when (total + 1) % 4 = 0 then streak_of_four + 1 else streak_of_four end where student_id = any ($1)";

const SELECT_STUDENTS_WITH_STREAK =
  "select s.id, s.name from students as s, student_stats as ss where ss.consecutive_classes = 0 and ss.student_id = s.id and s.id = any($1)";

const GET_ATTENDANCE_BY_DATE =
  "select distinct a.attendance_date, s.id, s.name as student_name, c.name as class_name, ss.total, ss.consecutive_classes, ss.streak_of_four from students as s, student_class as sc, student_stats as ss, classes as c, attendance as a where sc.student_id = s.id and c.id = sc.class_id and ss.student_id = s.id and s.id = a.student_id and a.attendance_date = $1 order by s.name asc";

const GET_ATTENDANCE =
  "select distinct s.id,  s.name as student_name, c.name as class_name, ss.total, ss.consecutive_classes, ss.streak_of_four from students as s, student_class as sc, student_stats as ss, classes as c where sc.student_id = s.id and c.id = sc.class_id and ss.student_id = s.id order by s.name asc";

const GET_LAST_FOUR_DATES =
  "with ranked_dates as (select student_id, attendance_date, row_number() over (partition by student_id order by attendance_date desc) as rn from attendance where student_id = any($1)) select student_id, attendance_date from ranked_dates where rn<=4 order by attendance_date desc";

const GET_ALL_DATES_BY_ID =
  "select * from attendance where student_id = any($1) order by attendance_date desc";

const SELECT_ALL_STUDENTS =
  "select s.*, c.name as class_name from students as s, classes as c, student_class as sc where sc.student_id = s.id and c.id = sc.class_id";

module.exports = {
  INSERT_INTO_STUDENT,
  SELECT_STUDENT_FROM_ID,
  INSERT_INTO_STUDENT_STATS,
  INSERT_INTO_STUDENT_CLASS,
  UPDATE_STUDENT_AND_STUDENT_CLASS,
  DELETE_STUDENT,
  INSERT_INTO_ATTENDANCE,
  UPDATE_STUDENT_STATS,
  GET_ATTENDANCE_BY_DATE,
  GET_ATTENDANCE,
  GET_LAST_FOUR_DATES,
  SELECT_ALL_STUDENTS,
  GET_ALL_DATES_BY_ID,
  SELECT_STUDENTS_WITH_STREAK,
};
