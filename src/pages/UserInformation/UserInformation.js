import styles from './UserInformation.module.scss'
import InformationInput from '../../components/InformationInput/InformationInput';
import ContinueButton from '../../components/ContinueButton/ContinueButton';
import EducationLevelButton from '../../components/EducationLevelButton/EducationLevelButton';

const UserInformation = () => {
    return (
        <div className={styles.background}>
            <h1>Tên bạn là gì?</h1>
            <InformationInput/>
            <h1>Bạn đang học ở cấp độ nào</h1>
            <div className={styles.educationLevels}>
                <EducationLevelButton icon='primary' name='Tiểu học'/>
                <EducationLevelButton icon='primary' name='THCS'/>
                <EducationLevelButton icon='primary' name='THPT'/>
                <EducationLevelButton icon='primary' name='Đại học'/>
            </div>
            <ContinueButton className={styles.continueButton}/>
        </div>
    )
}

export default UserInformation;