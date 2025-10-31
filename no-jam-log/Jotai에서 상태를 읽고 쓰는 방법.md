
- [[#소제목 1|소제목 1]]
	- [[#소제목 1#소소제목 1|소소제목 1]]
- [[#소제목 2|소제목 2]]
	- [[#소제목 2#소소제목2|소소제목2]]

## atom 함수?
1. 전역 변수로 설정된 keyCount 변수를 1 증가시면서 해당 아톰에 유일한 키 값을 생성
	1. 이 키는 toString 매서드에서 활용되어 해당 아톰의 라벨로 사용
2. config 객체 생성
	1. read / initialValue인자가 함수라면
		1. config.read 속성에 해당 함수 할당
	2. read / initiailValue인자가 함수가 아니라면
		1. init 속성에 값으로 할당
		2. read 속성에 defaultRead 함수 할당
		3. write 속성에 defaultWrite 할당
	3. write 인자를 넘겨줬다면
		1. config.write 속성에 값 할당
3. config 객체 리턴
 => 상태을 읽고 쓰는 방법을 정의한 객체를 생성하는 함수
 




---
*E.O.D*

#jotai #상태관리 #React
