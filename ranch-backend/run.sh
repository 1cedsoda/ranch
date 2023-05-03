git clone https://huggingface.co/Sosaka/Alpaca-native-4bit-ggml /Alpaca-native-4bit-ggml -v
cd /Alpaca-native-4bit-ggml
git pull -v
ln -s ggml-alpaca-7b-q4.bin /alpaca.cpp/ggml-alpaca-7b-q4.bin

cd /ranch-backend
npm run start