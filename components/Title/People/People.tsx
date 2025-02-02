import styles from './People.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface PeoPleProps {
  workData: WORKS_DATA_INNER | null;
}

export default function People({ workData }: PeoPleProps) {
  return (
    <div>
      <div className={cx('name-role-container')}>
        <p>{workData?.role} by 'Soli Jang'</p>
      </div>
      <div>
        <p>Photo by '{workData?.people.photo}'</p>
      </div>
      <div>
        <p>Collaborator by </p>
        <p>{workData?.people.crew.map((crew) => `'${crew}'`).join(' • ')}</p>
      </div>
      <div>
        {workData?.schedule.map((item, index) => (
          <div key={index}>
            <p>{item.date}</p>
            <p>{item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
