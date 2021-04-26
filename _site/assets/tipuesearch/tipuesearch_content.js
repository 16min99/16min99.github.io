var tipuesearch = {"pages": [{
    "title": "cuda 프로그래밍 환경설정 [windows]",
    "text": "CUDA설치 https://developer.nvidia.com/cuda-downloads OS버전에 맞게 선택후 설치 ⇒ 설치시 빠른설치(권장) 선택후 디폴트 값으로 진행 비쥬얼 스튜디오 CUDA 프로젝트 만들기 새 프로젝트 » 콘솔 앱 스튜디오 상단 디버그 x86에서 x64로 변경 프로젝트 우클릭 » 빌드 종속성 » 사용자 지정 빌드 쿠다 체크 프로젝트 우클릭 » 속성 링커 » 입력 » 추가 종속성 » cudart_static.lib; 추가 컴파일러 번경 소스코드 우클릭 » 속성 일반 » 항목형식 » CUDA C/C++",
    "tags": "etc",
    "url": "/etc/2021/04/22/etc-etc-cuda1/"
  },{
    "title": "인공지능응용시스템LS2",
    "text": "인공지능 응용시스템 Lecture Summary #2 12161783 전민규 Deep learning programming Deep learning programming에 사용되는 플랫폼중 하드웨어는 병렬처리가 가능한 GPU가 핵심이고, 딥러닝에 필요한 연산, 기능들을 함수와 같이 구현한 프레임워크들을 활용하여 보다쉽게 DL programming을 할 수 있다. Convolutional Neural Networks 이전에 학습한 Neural Networks의 기본적인 틀은 weights를 조절하여 loss를 줄이는 방식으로 구현되는 Network 이다. 이때 기본적인 Neural Networks는 data의 관계 정보는 이용하지 않게 된다. 예를 들어 classification에서 픽셀의 밝기값을 그대로 하나씩 늘려 사용하였기 때문에 가까이 있는 픽셀에 대해서 정보를 이용하지 않았기 때문에 효율적이지 못하였다. 이에 반해 CNN은 가까이 있는 픽셀에 대한 정보 즉, 공간의 정보를 활용한 Network이다. NN과 마찬가지로 weight를 조절하여 loss를 줄이는데 이때 weight는 2차원 벡터가 된다. CNN은 원래 존재하였으나 각광받지 못하다가 AlexNet이라는 모델의 등장으로 각광받기 시작됐으며 이것은 최근 딥러닝 부흥의 시작점이되었다. 공간에서의 정보를 이용하기 때문에 모든픽셀마다 weight가 존재해야 하는 기본적인 NN과 달리 공간상의 정보를 이용하기 때문에 weight를 획기적으로 줄일 수 있다. CNN은 Convolution 연산을 기본적으로 수행하며 pooling과 같은 트릭을 이용하기도 한다. Pooling은 data의 크기를 줄여 연산량을 줄이고 메모리를 아낄수 있기만 하는줄 알았는데 이것은 학습시 오버피팅되는 것을 방지할 수도 있었다. 즉, pooling시 정보의 손실이 생기지만 이것은 손실이아니라 오버피팅을 방지할 수 있는 트릭이 될 수도 있는것이다. Fully Connected Networks (FC layer) : 1x1 convolution layer로 마지막에 AlexNet은 ILSVRC에서 최초로 우승한 CNN모델이였다. AlexNet을 보면 Layer의 구성이 규칙적이지 않을 것을 알 수 있었는데 이것은 실험적인 결과로 좋은 성능을 낸 Layer의 구성이기 때문이다. 따라서 Deep Learning은 이론적인것 뿐만아니라 실험적으로 받아들여야 하는 부분도 중요하다고 할 수 있다. ZFNET : AlexNet을 기반으로 파라미터를 조절하여 성능을 끌어올린 모델 VGGNET : Layer가 많아서 깊어지면 성능이 좋다는 것을 이용한 모델로 filter의 사이즈는 줄이고 Layer를 깊게 쌓아 성능을 올린 것이 핵심이다. 이 때 3x3 conv연산을 3번연속 하는것은 7x7 conv연산을 한번하는것과 같은 영역의 크기를 이용 할 수 있으며 더 적은 파라미터를 갖는 다는 이점이 있다. Layer를 더 깊게 쌓아 성능을 올린다는 것은 Layer연산시 non-linearity가 더 많아지기 때문에 성능을 올릴 수 있다는 것이다. ⇒ 단순히 Layer가 많아 진다고 해서 성능이 올라갈 것이라고 생각하지 못하였다. 중요한것은 Layer의 양보다 질이라고 생각했기 때문이다 . 그러나 Layer가 많아지면 non-linearity 가 많아지기 때문에 성능이 좋아진다는 것을 이해 할 수 있었다. 그러나 이것에도 한계가 있었다. GoogLeNet: MultiLayer Perceptron(MLP), Global Average Pooling(GAP), 1x1 Convolution Layer 등의 트릭이 매우 좋은 결과를 냈고 추후 모델들이 이러한 기법을 차용하였다. ⇒ 이 모델에서 사용된 수많은 기법들이 매우 흥미로움 Inception : 이전 CNN모델들은 같은 Layer층에서 동일한 사이즈의 필터로 Conv연산을 했으나 GoogLeNet에서는 필터 사이즈가 다른 Conv연산 결과를 쌓아 올린 방식이다. 이전의 CNN모델의 Layer에서 Conv 연산이라고 하면 동등한 filter사이즈의 ConV로 아래와 같이 많은 파라미터와 계산량이 필요해진다. ConV Layer 계산 용어 정리 Input(입력데이터) : Height * Width * Channel Stride : 필터이동 보폭 pad : 가장자리 처리 사이즈 Filter : Height * Width (보통 채널은 제외하고 주어짐) parameters : 필터에 들어가는 값 + 각 필터의 bias **계산 OutputDataSize = [(Input변 + pad*2 - Filter변)/Stride + 1]* filter수 Parameters = [( Filter size ) * Channel + bias(1)] * filter수** GoogLeNet에서는 한 Layer의 filter 사이즈를 다르게 하여 ConV을 수행하고 쌓아 올리는 방식을 채택하였고 이에 따라 기존의 CNN모델들보다 더욱 다양한 특성을 도출해 낼 수 있었다. 그러나 GoogLeNet은 필터 사이즈를 다르게 ConV 연산을 함과 동시에 파라미터의 수를 줄일 수 있도록 차원을 줄이는 1x1 ConV을 실행하였다. Global average pooling : 채널들의 평균을 원소로하는 1차원 벡터로 만듦 ⇒ 최종 classifier시 FC Layer 사용시 파라미터의 수가 매우 많아(연산효율, 오버피팅의 문제) 비효율적인 단점을 보완하였고, 기존의 FC방식은 입력데이터 (이미지)의 사이즈를 FC Layer 사이즈와 동일 하여야 했지만 GAP사용으로 인해 이미지의 사이즈가 자유로워 질수 있다. auxiliary classifier : 깊은 Layer로 때문에 학습에 따라 역 전파시 gradient가 0에 가까워 지면 학습이 이루어지지 않는 vanishing gradient 문제가 발생하는데 이것을 학습시에 auxiliary classifier를 이용하여 해결하는 방법이 사용되었다. ResNet : Residual learning으로 잔차를 학습시키는 것에 아이디어를 둠, Layer가 깊어져 그래디언트가 0 이되어 학습 잘 이루어지지 않는 경우 Layer를 skip할 수 있음. object detection : classification + localization으로 한 이미지에서 객체의 분류와 동시에 위치를 잡아냄 instance segmentation : OD에 mask를 추가하여 박스형태가아닌 객체의 크기에 맞춰 segmentation도 추가됨 R-CNN Object detection 가장 기본 R-CNN은 object의 위치를 윈도우 형태로 임의로 뽑아 내는 연산을 Region Propsals을 수행한다. 그리고 뽑아낸 임시 객체의 윈도우를 각각 독립적으로 ConVNet을 수행하여 객체들을 분류하여 최종적으로 Object detection을 수행하게 된다. Fast R-CNN Region Propsals 함수를 이용하여 임시 객체의 윈도우들을 각각 독립적으로 ConVNet을 수행하게되면 연산량이 매우많아 속도가 느리다는 단점이 있었다. 따라서 이미지전체를 ConVNet하여 얻어 낸 특정맵에 원본이미지에서 구한 객체의 윈도우를 매칭하여 Object detection을 수행한다. 이때 처리속도는 굉장히 빨라졌다는것을 알 수 있다. Faster R-CNN Fast R-CNN에서 연산속도의 대부분은 ConVNet을 통해서 분류하는 것이아닌 Region Propsals 함수를 수행하는 과정에 대부분의 시간이 소모되었다. 따라서 이 Region Propsals 를 수행하는 것도 딥러닝으로 처리하면 어떨까? 에서 시작되었다. 결과적으로 원본 이미지에 ConVNet을 통해서 얻어낸 특정 맵에 대해서 Region Propsal을 수행하는 네트워크를 통하여 ROI를 뽑아내는 작업과 분류하는 작업을 딥러닝을 통하여 동시에 병렬적으로 수행했더니 매우 빨라진 것을 확인 할 수 있었다. ⇒ 이 때 RPN의 입력 데이터는 원본 이미지가 아닌 ConVNet 연산을 수행한 특정 맵이라는 점이다. 또한 ROI를 추출하는 연산을 수행하고 난뒤 분류를 하는 것이아니라 동시에 병렬적으로 수행된다는 것에서 연산 속도가 매우 빨라졌다.",
    "tags": "ML AI",
    "url": "/ai/2021/04/21/AI-ML-AILS2/"
  },{
    "title": "ML lecture summary",
    "text": "예제 Machine Learning Basics ML Overview Supervised Learning : 정답(label)을 제공하면서 학습 시키고 문제를 해결하는 방법을 제공하면서 학습 시키고 문제를 해결하는 방법 ⇒ 본 강의는 주로 이내용을 다룸 Regression : 데이터의 추정치를 근사하는 식을 만드는 것 ⇒ x,y좌표를 받아 차량의 heading값을 구할 수 있는 프로젝트를 해볼까? ** Classification : 데이터를 구분하는 식을 만드는 것 Unsupervised Learning : 정답(label)을 제공하지 않고 경향성을 찾도록 하는 방법 Reinforcement Learning : supervised와 Unsupervised를 환경에 따라 적절하게 사용하느것 Machine Learning : 사람이 관여한 학습 Deep Learning : 전면 자동 학습 Model Parameters : 학습결과 HyperParameters : 유저가 설정한 값 ex)모델 사이즈 Data Split for ML : 처음에 data를 train data와 test data를 나누고 나서 train data 또한 모의고사용으로 validation을 따로 주어야 테스트전에 평향되지 않은 결과로 검증된 test할 수 있다. Linear Regression 정의역 x를 입력으로 주면 y를 알 수 있음 ⇒ 확장한 Linear Prediction ( 여러차원의 input ) Loss function(손실 함수) : 예상값과 실제값과의 차이를 함수로 정의 한 것 Optimization : 손실 함수를 줄일 수 있게 Model parameters에 피드백을 주는 행동 Nearest Neighbors ⇒ test시 가장 거리가 가까운 label의 class로 판단 Image Classification : 이미지를 주면 이게 무엇인지 보는 것 ⇒Semantic Gap,viewpoint variation, Background Clutter, illumination. Occlusion. Intar-class variation, Inter-class variation 등의 이슈가 있다. Intra-class variation VS Inter-class variation 클래스 내의 분포 VS 클래스 간의 거리 ⇒작을 수록 ⇒ 멀수록 좋다. (구분감) Distance Metric : 거리계산 공식 ex) L1 , L2 ⇒ L1은 Mangattan 거리로 x와 y의 합을 구한 거리이고 L2는 Euclidean 거리로 x와 y따로 구하지않고 제곱한 거리이다.(선호) Nearest Neighbors 특징 모든 data를 기억하고 test시 비교해서 결과를 내므로 training은 빠를 수 있으나 기억해야하는 data도 많고 test시 시간이 오래걸린다. 또한 어떠한 사람이 봤을때 항상 구분이 가능하나 이것은 구분을 못할 수 있다. (인위적으로 한부분 가린경우) Dimensionality Reduction/Expansion Dimension Expansion ⇒ 클래스 내의 분포와 거리가 애매해서 구분이 어려운 경우 사용 Dimension을 확장하여 classifier performance를 증가 시킬 수 있으나, 과하게 확장시 감소한다. 즉, 적당한 Dimenstion Expansion을 해야함. Dimension Reduction PCA : 최적의 표현을 할 수 있는 최대 분산을 찾도록 차원을 축소하는것 LDA : 클래스의 구분감을 올리기 위해 차원을 축소하는것 t-sne: 시각화를 위해 차원을 축소하는것 Linear Classifier : W(weights)를 조정하여 label class의 score를 증가시켜 Classifier를 수행함 input x→ f(x,W) → Class scores 이 때 Class scores 들을 이용하여 정답 scores와 비교를 통한 다양한 Loss Function을 줄여 Weight를 조정한다. (Optimization) nonlinear한 경우 Layer 사이에 Nonlinearity activation function을 더해서 해결한다. ( 이것은 뒤에 Deep Neural Network의 기본이 됨) ⇒ W1*W2 (선형적인) 해도 Linear이다. SVM classifier vs Softmax Classifer ⇒ Loss function (손실함수) 비교 SVM Loss function(hinge loss) ⇒margin 값만 넘기면 학습 종료하므로 상대적으로 욕심이 적다. Softmax Loss function(Cross-Entropy Loss) ⇒확률이 합이 1이라는 성질을 다중 분류에 사용 (Multi-class classification에 주로 사용됨) 정확한 예측을 할 수록 L의 크기는 작아진다. 그러나 예측을 잘 못할수록 L이 커짐 이를 이용하여 loss함수를 최소화 시키는 방향으로 weight를 업데이트 ⇒ corrct class score가 1.00이 되어야 학습을 종료하므로 상대적으로 욕심이 많다. (추가) MSE(mean squared error) : regression(회귀) 용도의 딥러닝 모델을 훈련할 때 사용되는 손실 함수 Object Detector인 Yolov4 모델의 Loss function인 Focal loss ⇒ 예측을 잘 한 class에 대해서는 loss를 적게 해 loss갱신을 거의 못하게하고, 예측을 제대로 하지 못한 class에 대해서는 loss를 크게 줌 Neural Networks 1 Introduction to Neural Networks 인간의 Neural을 모방한 Networks n-layer-Neural Network linear score function에서 확장하여 Activation function (ex ReLu(max(0,x))) 를 이용하여 구성됨 ReLu(활성함수) Gradient Descent ⇒ 최선의 W를 구하는 방법이 무엇일까? ( 랜덤하게 업데이트하게되도 생각보다 괜찮은 결과가 나온다 그러나 기울기를 따라 진행해보면 어떨까? 에서시작 ) gradient을 통해서 변화량을 구하고 0이 되는 방향으로 W를 조정 Analytic Gradient : 편미분을 통하여 빠르고 정확하게 계산 Computational Graph &amp; Backpropagation ⇒ 계산이 복잡해지면 Loss에 대해서 gradient를 구하기 어려울 수 있다. Computational Graph : 연산을 그래프화 Backpropagation(역전파) : 미분을 통해 맨 뒤에서 부터 거꾸로 전파하여 W와 Bias를 조정 Regularization Regularization loss / R(W) : overfiting을 예방하기 위한 것 ( test에 맞추기 위한건데 너무 train에 맞춰지면 안됨) Loss는 앞서구한 data loss와 Regularization loss를 더해서 구한다. ⇒ L2를 대부분 사용 Neural Networks 2 Data Preprocessing Optimization 를 효율적으로 하기위해 전처리 하는과정 zero-centered data : 영점조절 (기본) normalized data : 축 scale조절 decorrelated data : 각 축에 직교하게 만듬 ( correlation을 없앰) whitened data : 축에 대해서 분산량이 동일하게 원의 형태로 만듬 ⇒PCA 와 wthiening은 deep learning 에서 잘안쓴다 Weight Initialization NN 요약 : input layer→ Hidden layer (W) →Ouput layer : 사이사이는 nonlinear이지만 마지막은 linear! ( Not guaranteed to reach the optimum, 기울기가 0이라고 optimum이라고 하면안됨) Global Optimum: 결론적으로 원하는 값 Local Minimum : non-convex할때 생긴 지점 W가 작은값으로 초기값을 갖게 될때 문제가 생김 (Activation function을 tanh로 사용할 때 ) ⇒ Layer를 통과시킬수록 가운데에 몰리기때문에 gradient도 작아지므로 업데이트가 발생하지 않음 W가 상대적으로 큰경우 (tanh) ⇒ 마찬가지로 기울기가 0 이되므로 문제가 생김 ( 사이드로 과포화 ) Xavier Initialization : 위의 문제를 해결하는 방법 표준 정규 분포를 입력 차원의 수로 스케일링 ⇒ ReLu 사용시 0신호가 가까워 지므로 2를 추가로 곱해주는 Kalming / MSRA Initialization 함Xavier Initialization : 위의 문제를 해결하는 방법 표준 정규 분포를 입력 차원의 수로 스케일링 ⇒ ReLu 사용시 0신호가 가까워 지므로 2를 추가로 곱해주는 Kalming / MSRA Initialization 함 Stocahstic Gradient Descent 데이터를 랜덤하게 샘플링 → traing → 다시 랜덤하게 샘플링 → traing → 반복 (통계적인 측면에서 좋은 성질을 이용) Batch : 수행 할 수 있는 범위 내에서 분활한 subset Epoch : 하나의 전체 데이터셋을 한바퀴 도는 것의 단위 Iteration : Epoch을 도는데 필요한 Batch 수 (Fancier) Optimizers ⇒ SGD도 Optimizers의 하나의 예지만, 문제가있다. 시간이 오래걸리거나 , Local minimum에 갖힐 수 있다. SGD + Momentum : velocity도 고려하여 gradient와 velocity의 벡터 합을 통해 실제 변화량을 계산하여 gradient이 0인 점에 갖히지 않도록함 AdaGrad : gradient가 급격한경우 완만하게, 완만한경우 급격하게 변화 (제곱 이용) Adam : Momentum + AdaGrad (보통 이걸써라, SGD는 튜닝하기 어려울수 있음) Regularization Overfitting : 학습할수록 train Accuract는 올라가나 val Accuract는 잘 올라가지 않을 때 ⇒더 많은 data 수집, regularization 규제, dropout 등과 같은 방법으로 Overfitting을 막을 수 잇음 Underfitting : 학습후 train과 val의 Accuract차이는 크지않으나 실제test에서 낮은 Accuract를 나타낼 때 ⇒epochs횟수 늘리기, parameter가 더 많은 복잡한 모델 선택, model의 규제를 줄이는 방법 등으로 막을 수 있음 Model Ensembles : 과대적합 시 사용하는 트릭 중 하나로 학습시 모델을 살짝 변화시킨 여러 모델들을 학습시키고 결과 확률의 평균중 최대값을 사용한다. 너무많은 학습량을 필요로 하므로 개인 레벨에서는 부적합하다. Regularization loss (Weight decay) Dropout : 일정 확률로 노드 연결을 끊어 feature간의 연결성을 낮추고(co-adaptation) 분별력을 높임, Ensembles의 효과를 낼 수 있음 Dropout의 test time에는 모든 노드를 키고 score값에 노드의 확률을 곱하여 계산함 ⇒ 학습시에는 p른 나눠줌 ( Inverted dropout ) Data Augmentation : data를 실제 상황에서 일어날 수 있을 법한 변형을 적용 ex) Horizontal Flips (좌우대칭) , 상하대칭은 사용X(실제 잘 안일어남) Random crops and scales (랜덤하게 patch를 잘라냄) Color Jitter (픽셀 밝기나 contrast를 조절) … DropConnect : 노드는 살리고 Weight를 끊는 방법 CutOut : 이미지 내에서 ramdom영역을 지워 학습 Mixup : 랜덤으로 다른 두 class를 blend한 이미지를 목표label score을 blend 비율로 나누어서 학습 Cutmix : CutOut+Mixup ⇒ 여러가지 짬봉하는 기법이나 실제 있을법한 환경으로 학습을 다양하게 해보자 Hyperparameter Tuning : 성능을 최적화하거나, bias과 variance사이의 균형을 맞출 때, 알고리즘을 조절하기 위해 사용. 학습 전에 미리 지정되어 훈련하는 동안은 상수로 남게 되며, 가중치와 같은 파라미터와 다르게 주로 알고리즘 사용자에 의해 정해짐 → 과소적합, 과대적합을 피하기 위해 적당한 값이 설정 Hyperparameter searching Random Search VS Grid Search : Ramdom이 최적 구간을 잘 잡을 수 있음 주로 사용Coarse to Fine : Random Search를 할때 모든 구간을 Search하지 않고 lough하게 진행하고 결과가 좋은 일정 구간을 search함 Choosing Hyperparameters Guidelines step1. Check inital loss : 초기에 과대적합을 고민할 필요 없으므로 regulaization loss(weight decay)를 끄고 data loss만 사용 step2. Overfit a small sample : 학습데이터에 대해서 조금만 샘플링 후 경향성을 분석 step3. Find Learning Rate that makes loss go down : 전체 data에 대해 loss가 감소하는 learning rate 찾고 난 후 regulaization loss 고려함 step4. Coarse grid, train for ~1-5 epochs : coarse하게 몇개의 value를 찾고 step5. Refine grid, tarin longer : 확인 후 가장 성능 좋은 모델의 하이퍼파라미터로 부터 grid를 refine. step6. Look at loss curves : loss와 Accuracy를 분석 (경향성 분석) step7. setp4로 돌아가 반복",
    "tags": "test Test",
    "url": "/test/2021/04/05/test-test1/"
  },{
    "title": "왕초보를 위한 Git &amp; b 가이드",
    "text": "Git Guide 깃(git)이란 ? 분산 버전 관리 시스템으로 빠른 응답성과 브랜치 관리의 편리함등의 장점이 있다. 또한 gitHub와 같은 서비스로 프로젝트 협업이 쉬워지게 되었다. gitHub : git은 개인컴퓨터(로컬)에서만 사용 가능하지만 이것을 클라우드 서버에 연동 시켜 팀 프로젝트를 편리하게 진행할 수 있다. 이러한 git을 클라우드 서버에 올려둘 수 있는 사이트중 하나가 gitHub이다. 오픈소스: 이러한 gitHub의 장점을 이용하여 시간,공간 제약없이 누구든지 같이 개발 할수 있는 공개 저장소 프로젝트 . 이 페이지는 ‘한빛미디어 출판 &lt;팀개발을 위한 Git , GitHub 시작하기&gt; 정호영,진유림저 ‘ 를 읽고 정리하는 식으로 작성 되었습니다 설치 windows는 git bash 프로그램을 다운받아서 사용합니다. https://git-scm.com/download/win ⇒디폴트값으로 next눌러서 진행 유닉스/리눅스 기반 OS(우분투,맥)는 터미널을 사용하면 됩니다. 2.로컬 저장소 만들기 쉬운 이해를 위해 예를 들어 설명합니다. 우리는 iTshirt라는 프로젝트를 진행한다고 가정합니다. 프로젝트 디렉토리(폴더)에 README 텍스트파일 생성합니다. 프로젝트 디렉토리에서 마우스 우클릭 후git bash here을 통해서 git bash를 실행 합니다. $git init을 통하여 로컬저장소 생성 ( git 초기화 명령어) 프로젝트 디렉토리 안에 [.git]이라는 폴더 생성확인 ⇒ 프로젝트 디렉토리에서 버전관리가 가능해짐 git init 커밋 : 생성된 각 버전 README.txt 파일을 하나의 버전으로 만들기 예제 1) 버전 관리를 위한 내 정보 등록 git config --global user.email \"16ming99@gmail.com\" git config --global user.name \"16min99\" 위의 명령어 대로 깃허브 이메일, 이름 등록 2)커밋에 파일 추가 git add README.txt 추가로 커밋에 상세 설명(주석)을 적을 수 있음. -m 옵션은 message의 약자 git commit -m \"설명 추가\" ⇒이렇게 첫 번째 버전(커밋)이 생성됨 3) 두번째 버전 만들기 ‘짱짱’ 이라는 단어를 추가한 버전을 만들기위해 README파일 수정 후 저장 git add README.txt git commit -m \"설명 추가 업데이트버전1\" 마찬가지로 add하고 설명추가 ⇒ 두 개의 버전(커밋) 이 생성됨 4) 다른 버전(커밋)으로 되돌리기 README의 예전버전을 찾아서 이동 할 수 있음 현재 README.txt 파일의 내용은 두 번째 만들었던 ‘설명 추가 업데이트버전1’ 커밋 이고 내용은 ‘개발자 티셔츠 쇼핑몰 오픈소스 짱짱’ 이다. 이 상태에서 ‘짱짱’이 없는 이전버전으로 돌아가보기 git log git log명령어로 커밋 아이디 확인 git checkout 5c75b8c git checkout (커밋아이디 앞자리 7자리만 입력해도 됨) ⇒자동으로 README.txt 내용이 첫 번째 버전으로 변경됨 +최신 버전으로 변경하기 git checkout - git checkout - 는 최신버전으로 다시 변경해줌 4.GitHub 원격저장소에 커밋 올리기 로컬저장소(내컴퓨터) ↔ 원격저장소(클라우드)(레포지토리,Repository) 1)GitHub 로그인 https://github.com/ 오른쪽 상단 +버튼 , New repository 선택 다음과 같이 작성 후 create repository 2)GitHub에서 내 레포지토리 접속하기 https://github.com/사용자이름/원격저장소이름 예 : https://github.com/16min99/iTshirt ⇒ 협업 팀원들은 해당주소에 접속가능 빨간 칸을 클릭하여 쉽게 복사가능 3)Repository(원격저장소)에 커밋 올리기 GitHub에 만들어 놓은 원격저장소 [iTshirt]의 주소를 로컬저장소 [iTshirt-cat]에 연결 git remote add origin https://github.com/16min99/iTshirt.git 로컬저장소에 있는 커밋을 원격 저장소에 push (업로드) git push origin master 해당 명령어를 통해서 로그인 ( 명령어 설명은 나중에 설명함) 순서대로 진행하면 됩니다. 위와 같은 창이뜨면 GitHub의 원격저장소를 확인하면 다음과같이 README.txt 파일이 업로드 된 것을 확인할 수 있다. 위와같이 로컬 저장소에서 원격저장소에 커밋을 업로드 하는 것을 push 한다고 함. 5.원격 저장소의 커밋을 로컬 저장소에 내려받기 1) 클론 클론이란? 원격저장소의 코드와 버전(커밋) 전체를 내려받는 것으로 클론을 하게되면 최신 버전뿐만 아니라 저장한 이전 버전들과 원격저장소 주소등 모든것이 내 컴퓨터의 로컬저장소에 저장된다. 먼저 디렉토리(폴더)를 생성하고 마찬가지로 bash프로그램을 실행한다. 4절에서 원격 저장소의 주소를 복사한다. bash에서 다음과 같이 명령어를 실행시킨다. git clone https://github.com/16min99/iTshirt.git . 이 때 맨 마지막에 한 칸 띄고 . 을 빼먹지 않도록 해야한다. 클론이 완료 되었다. 2) 다른 팀원 입장에서 새로운 커밋을 올리기 클론된 프로젝트의 README파일을 다음과 같이 수정한다. 4절에서 배운 같은 명령어 3줄을 입력해서 push한다. git add README.txt git commit -m \"개발자 목록 추가\" git push origin master GitHub의 원격 저장소에 들어가서 새로고침을 하면 업데이트 된 것을 확인 할 수 있다. 원격저장소의 새로운 커밋을 로컬저장소에 갱신하기 (cat의 로컬 저장소에 oct가 원격저장소에 업데이트한 커밋 내려받기) ⇒아직 cat의 로컬저장소에는 개발자 목록이 업데이트 되지 않았다. cat의 bash에서 해당 명령어를 통하여 pull(당겨오기,업데이트) git pull origin master 아래처럼 cat의 로컬저장소에도 업데이트 된것을 확인할 수 있다. 이때 마찬가지로 파일의 내용만 업데이트 되는것이아니라 처음에 버전관리로 저장된 버전에 대한 정보도 같이 업데이트 되기때문에 이전버전으로 돌릴 수 있다. 기본적으로 내 컴퓨터에 로컬저장소를 만들고, 커밋을 생성하고, 커밋을 원격저장소에 올리고, 원격저장소에 올려진 커밋을 내려받는 기본적인 방법은 모두 배웠습니다.! 용어 요약 git : 버전 관리 시스템 GitHub : Git으로 관리하는 프로젝트를 올려둘 수 있는 사이트 GUI : 그래픽 유저 인터페이스, 마우스로 사용하는 방식 CLI : 커맨드 라인 인터페이스, 명령어를 하나씩 입력하는 방식 Git Bash : CLI 방식으로 Git을 사용할 수 있는 환경 커밋 : 버전 관리를 통해 생성된 파일, 혹은 그 행위 체크아웃 : checkout으로 원하는 지점으로 파일을 되돌리는 것 로컬저장소 : Git으로 버전 관리하는 내컴퓨터 안의 폴더 레포지토리: 원격 저장소 푸시 : 로컬저장소의 커밋을 원격저장소에 올리는 것 풀 : 원격저장소의 커밋을 로컬저장소에 내려받는 것",
    "tags": "etc",
    "url": "/etc/2021/04/02/etc-etc-git1/"
  },{
    "title": "인공지능응용시스템LS1",
    "text": "인공지능 응용시스템 Lecture Summary #1 12161783 전민규 인하대학교 ICE4101 수업을 듣고 정리하였습니다. 잘못된 내용은 코멘트 부탁드립니다. Machine Learning Basics ML Overview Supervised Learning : 정답(label)을 제공하면서 학습 시키고 문제를 해결하는 방법을 제공하면서 학습 시키고 문제를 해결하는 방법 ⇒ 본 강의는 주로 이내용을 다룸 Regression : 데이터의 추정치를 근사하는 식을 만드는 것 ⇒ x,y좌표를 받아 차량의 heading값을 구할 수 있는 프로젝트를 해볼까? ** Classification : 데이터를 구분하는 식을 만드는 것 Unsupervised Learning : 정답(label)을 제공하지 않고 경향성을 찾도록 하는 방법 Reinforcement Learning : supervised와 Unsupervised를 환경에 따라 적절하게 사용하느것 Machine Learning : 사람이 관여한 학습 Deep Learning : 전면 자동 학습 Model Parameters : 학습결과 HyperParameters : 유저가 설정한 값 ex)모델 사이즈 Data Split for ML : 처음에 data를 train data와 test data를 나누고 나서 train data 또한 모의고사용으로 validation을 따로 주어야 테스트전에 평향되지 않은 결과로 검증된 test할 수 있다. Linear Regression 정의역 x를 입력으로 주면 y를 알 수 있음 ⇒ 확장한 Linear Prediction ( 여러차원의 input ) Loss function(손실 함수) : 예상값과 실제값과의 차이를 함수로 정의 한 것 Optimization : 손실 함수를 줄일 수 있게 Model parameters에 피드백을 주는 행동 Nearest Neighbors ⇒ test시 가장 거리가 가까운 label의 class로 판단 Image Classification : 이미지를 주면 이게 무엇인지 보는 것 ⇒Semantic Gap,viewpoint variation, Background Clutter, illumination. Occlusion. Intar-class variation, Inter-class variation 등의 이슈가 있다. Intra-class variation VS Inter-class variation 클래스 내의 분포 VS 클래스 간의 거리 ⇒작을 수록 ⇒ 멀수록 좋다. (구분감) Distance Metric : 거리계산 공식 ex) L1 , L2 ⇒ L1은 Mangattan 거리로 x와 y의 합을 구한 거리이고 L2는 Euclidean 거리로 x와 y따로 구하지않고 제곱한 거리이다.(선호) Nearest Neighbors 특징 모든 data를 기억하고 test시 비교해서 결과를 내므로 training은 빠를 수 있으나 기억해야하는 data도 많고 test시 시간이 오래걸린다. 또한 어떠한 사람이 봤을때 항상 구분이 가능하나 이것은 구분을 못할 수 있다. (인위적으로 한부분 가린경우) Dimensionality Reduction/Expansion Dimension Expansion ⇒ 클래스 내의 분포와 거리가 애매해서 구분이 어려운 경우 사용 Dimension을 확장하여 classifier performance를 증가 시킬 수 있으나, 과하게 확장시 감소한다. 즉, 적당한 Dimenstion Expansion을 해야함. Dimension Reduction PCA : 최적의 표현을 할 수 있는 최대 분산을 찾도록 차원을 축소하는것 LDA : 클래스의 구분감을 올리기 위해 차원을 축소하는것 t-sne: 시각화를 위해 차원을 축소하는것 Linear Classifier : W(weights)를 조정하여 label class의 score를 증가시켜 Classifier를 수행함 input x→ f(x,W) → Class scores 이 때 Class scores 들을 이용하여 정답 scores와 비교를 통한 다양한 Loss Function을 줄여 Weight를 조정한다. (Optimization) nonlinear한 경우 Layer 사이에 Nonlinearity activation function을 더해서 해결한다. ( 이것은 뒤에 Deep Neural Network의 기본이 됨) ⇒ W1*W2 (선형적인) 해도 Linear이다. SVM classifier vs Softmax Classifer ⇒ Loss function (손실함수) 비교 SVM Loss function(hinge loss) ⇒margin 값만 넘기면 학습 종료하므로 상대적으로 욕심이 적다. Softmax Loss function(Cross-Entropy Loss) ⇒확률이 합이 1이라는 성질을 다중 분류에 사용 (Multi-class classification에 주로 사용됨) 정확한 예측을 할 수록 L의 크기는 작아진다. 그러나 예측을 잘 못할수록 L이 커짐 이를 이용하여 loss함수를 최소화 시키는 방향으로 weight를 업데이트 ⇒ corrct class score가 1.00이 되어야 학습을 종료하므로 상대적으로 욕심이 많다. (추가) MSE(mean squared error) : regression(회귀) 용도의 딥러닝 모델을 훈련할 때 사용되는 손실 함수 Object Detector인 Yolov4 모델의 Loss function인 Focal loss ⇒ 예측을 잘 한 class에 대해서는 loss를 적게 해 loss갱신을 거의 못하게하고, 예측을 제대로 하지 못한 class에 대해서는 loss를 크게 줌 Neural Networks 1 Introduction to Neural Networks 인간의 Neural을 모방한 Networks n-layer-Neural Network linear score function에서 확장하여 Activation function (ex ReLu(max(0,x))) 를 이용하여 구성됨 ReLu(활성함수) Gradient Descent ⇒ 최선의 W를 구하는 방법이 무엇일까? ( 랜덤하게 업데이트하게되도 생각보다 괜찮은 결과가 나온다 그러나 기울기를 따라 진행해보면 어떨까? 에서시작 ) gradient을 통해서 변화량을 구하고 0이 되는 방향으로 W를 조정 Analytic Gradient : 편미분을 통하여 빠르고 정확하게 계산 Computational Graph &amp; Backpropagation ⇒ 계산이 복잡해지면 Loss에 대해서 gradient를 구하기 어려울 수 있다. Computational Graph : 연산을 그래프화 Backpropagation(역전파) : 미분을 통해 맨 뒤에서 부터 거꾸로 전파하여 W와 Bias를 조정 Regularization Regularization loss / R(W) : overfiting을 예방하기 위한 것 ( test에 맞추기 위한건데 너무 train에 맞춰지면 안됨) Loss는 앞서구한 data loss와 Regularization loss를 더해서 구한다. ⇒ L2를 대부분 사용 Neural Networks 2 Data Preprocessing Optimization 를 효율적으로 하기위해 전처리 하는과정 zero-centered data : 영점조절 (기본) normalized data : 축 scale조절 decorrelated data : 각 축에 직교하게 만듬 ( correlation을 없앰) whitened data : 축에 대해서 분산량이 동일하게 원의 형태로 만듬 ⇒PCA 와 wthiening은 deep learning 에서 잘안쓴다 Weight Initialization NN 요약 : input layer→ Hidden layer (W) →Ouput layer : 사이사이는 nonlinear이지만 마지막은 linear! ( Not guaranteed to reach the optimum, 기울기가 0이라고 optimum이라고 하면안됨) Global Optimum: 결론적으로 원하는 값 Local Minimum : non-convex할때 생긴 지점 W가 작은값으로 초기값을 갖게 될때 문제가 생김 (Activation function을 tanh로 사용할 때 ) ⇒ Layer를 통과시킬수록 가운데에 몰리기때문에 gradient도 작아지므로 업데이트가 발생하지 않음 W가 상대적으로 큰경우 (tanh) ⇒ 마찬가지로 기울기가 0 이되므로 문제가 생김 ( 사이드로 과포화 ) Xavier Initialization : 위의 문제를 해결하는 방법 표준 정규 분포를 입력 차원의 수로 스케일링 ⇒ ReLu 사용시 0신호가 가까워 지므로 2를 추가로 곱해주는 Kalming / MSRA Initialization 함Xavier Initialization : 위의 문제를 해결하는 방법 표준 정규 분포를 입력 차원의 수로 스케일링 ⇒ ReLu 사용시 0신호가 가까워 지므로 2를 추가로 곱해주는 Kalming / MSRA Initialization 함 Stocahstic Gradient Descent 데이터를 랜덤하게 샘플링 → traing → 다시 랜덤하게 샘플링 → traing → 반복 (통계적인 측면에서 좋은 성질을 이용) Batch : 수행 할 수 있는 범위 내에서 분활한 subset Epoch : 하나의 전체 데이터셋을 한바퀴 도는 것의 단위 Iteration : Epoch을 도는데 필요한 Batch 수 (Fancier) Optimizers ⇒ SGD도 Optimizers의 하나의 예지만, 문제가있다. 시간이 오래걸리거나 , Local minimum에 갖힐 수 있다. SGD + Momentum : velocity도 고려하여 gradient와 velocity의 벡터 합을 통해 실제 변화량을 계산하여 gradient이 0인 점에 갖히지 않도록함 AdaGrad : gradient가 급격한경우 완만하게, 완만한경우 급격하게 변화 (제곱 이용) Adam : Momentum + AdaGrad (보통 이걸써라, SGD는 튜닝하기 어려울수 있음) Regularization Overfitting : 학습할수록 train Accuract는 올라가나 val Accuract는 잘 올라가지 않을 때 ⇒더 많은 data 수집, regularization 규제, dropout 등과 같은 방법으로 Overfitting을 막을 수 잇음 Underfitting : 학습후 train과 val의 Accuract차이는 크지않으나 실제test에서 낮은 Accuract를 나타낼 때 ⇒epochs횟수 늘리기, parameter가 더 많은 복잡한 모델 선택, model의 규제를 줄이는 방법 등으로 막을 수 있음 Model Ensembles : 과대적합 시 사용하는 트릭 중 하나로 학습시 모델을 살짝 변화시킨 여러 모델들을 학습시키고 결과 확률의 평균중 최대값을 사용한다. 너무많은 학습량을 필요로 하므로 개인 레벨에서는 부적합하다. Regularization loss (Weight decay) Dropout : 일정 확률로 노드 연결을 끊어 feature간의 연결성을 낮추고(co-adaptation) 분별력을 높임, Ensembles의 효과를 낼 수 있음 Dropout의 test time에는 모든 노드를 키고 score값에 노드의 확률을 곱하여 계산함 ⇒ 학습시에는 p른 나눠줌 ( Inverted dropout ) Data Augmentation : data를 실제 상황에서 일어날 수 있을 법한 변형을 적용 ex) Horizontal Flips (좌우대칭) , 상하대칭은 사용X(실제 잘 안일어남) Random crops and scales (랜덤하게 patch를 잘라냄) Color Jitter (픽셀 밝기나 contrast를 조절) … DropConnect : 노드는 살리고 Weight를 끊는 방법 CutOut : 이미지 내에서 ramdom영역을 지워 학습 Mixup : 랜덤으로 다른 두 class를 blend한 이미지를 목표label score을 blend 비율로 나누어서 학습 Cutmix : CutOut+Mixup ⇒ 여러가지 짬봉하는 기법이나 실제 있을법한 환경으로 학습을 다양하게 해보자 Hyperparameter Tuning : 성능을 최적화하거나, bias과 variance사이의 균형을 맞출 때, 알고리즘을 조절하기 위해 사용. 학습 전에 미리 지정되어 훈련하는 동안은 상수로 남게 되며, 가중치와 같은 파라미터와 다르게 주로 알고리즘 사용자에 의해 정해짐 → 과소적합, 과대적합을 피하기 위해 적당한 값이 설정 Hyperparameter searching Random Search VS Grid Search : Ramdom이 최적 구간을 잘 잡을 수 있음 주로 사용Coarse to Fine : Random Search를 할때 모든 구간을 Search하지 않고 lough하게 진행하고 결과가 좋은 일정 구간을 search함 Choosing Hyperparameters Guidelines step1. Check inital loss : 초기에 과대적합을 고민할 필요 없으므로 regulaization loss(weight decay)를 끄고 data loss만 사용 step2. Overfit a small sample : 학습데이터에 대해서 조금만 샘플링 후 경향성을 분석 step3. Find Learning Rate that makes loss go down : 전체 data에 대해 loss가 감소하는 learning rate 찾고 난 후 regulaization loss 고려함 step4. Coarse grid, train for ~1-5 epochs : coarse하게 몇개의 value를 찾고 step5. Refine grid, tarin longer : 확인 후 가장 성능 좋은 모델의 하이퍼파라미터로 부터 grid를 refine. step6. Look at loss curves : loss와 Accuracy를 분석 (경향성 분석) step7. setp4로 돌아가 반복",
    "tags": "ML AI",
    "url": "/ai/2021/04/01/AI-ML-AILS1/"
  }]};
