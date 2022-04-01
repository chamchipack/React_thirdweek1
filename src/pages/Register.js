
function Register(){
    return(
        <div className="register-box">
            <div className="register-inner">
                <div className="register-title">
                    <h3>회원가입</h3>
                </div>
                <div className="reg-input">
                    <h4>아이디</h4>
                    <input/>
                </div>
                <div className="reg-input">
                    <h4>닉네임</h4>
                    <input/>
                </div>
                <div className="reg-input">
                    <h4>비밀번호</h4>
                    <input/>
                </div>
                <div className="reg-input">
                    <h4>비밀번호확인</h4>
                    <input/>
                </div>
                <div className="reg-input">
                    <button>저장하기</button>
                </div>
            </div>
        </div>
    )
}
export default Register