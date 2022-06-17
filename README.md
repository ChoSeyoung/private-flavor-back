# 프로젝트 개발 구성
<img src="https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg" width="150" />
<img src="https://hibernate.org/images/hibernate-logo.svg" width="150" />
<img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" width="150" />
<img src="https://tomcat.apache.org/res/images/tomcat.png" width="150" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" width="150" />
<img src="https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png" width="150" />

# 프로젝트 빌드 흐름
* copyReactBuildFiles > buildReact > installReact 순차 실행
* 역순으로 react 프로젝트를 build 하기 위한 npm 명령어 실행
* React 프로젝트의 build 데이터가 /src/main/resources/static/하위로 copy
* React 프로젝트의 build 데이터 기반 jar 파일 생성

# 프로젝트 빌드 방법
프로젝트 최상위 폴더에서 다음 명령어 실행
```
./gradlew build
```

# 빌드된 jar 파일 생성 경로
```
프로젝트 최상위 폴더/build/libs
```

# jar 단독실행 시 프로파일 설정 방법
```
java -jar excutable-file.jar --spring.profiles.active=프로파일명
```
