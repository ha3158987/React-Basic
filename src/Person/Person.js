import React from 'react';
//react를 import해야지 JSX로 변환이 된다.
//컴포넌트 폴더/파일 이름은 capital letter로 하는 것이 컨벤션.
//상수여도 함수이름은 Person이 아닌 person으로 표기.
//return 뒤에 일반괄호()로 두르게 되면, 여러줄의 JSX를 작성할 수 있다.
const person = (props) => {
    return (
    <div>
         <p>I'm {props.name} and I am {props.age} years old!</p>
         <p>{props.children}</p>
    </div>
    )
};

//props는 html에서 attribute을 설정해주는 것과 같다.
//class에서 props를 가지고 올 때는 'this.props'가 된다.

export default person;