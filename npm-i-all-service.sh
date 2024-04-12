#!/bin/sh

npm i

cd ./tic-tac-toe-be/

array=($(find . -mindepth 1 -maxdepth 1 -type d))

# loop over
for i in ${array[@]}; do
  cd $i
  npm i
  cd ..
done

cd ../

#!/bin/sh

npm i

cd ./tic-tac-toe-fe/

array=($(find . -mindepth 1 -maxdepth 1 -type d))

# loop over
for i in ${array[@]}; do
  cd $i
  npm i
  cd ..
done

cd ../