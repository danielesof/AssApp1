import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    borderRadius: (0,0, 18,18),
    backgroundColor: '#ECECEC',
    fontFamily: 'Rubik',
    shadowColor: '#01579b',
    shadowOpacity:10,
    shadowRadius: 120,
    shadowOffset: {
      height: 100,
      width: 50
    }
  },
  headerContainer: {
    marginTop:15,
    width:'81%',
    textAlign: 'left',
    paddingLeft: 20
  },
  photoContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignSelf: 'auto'
  },
  greenDot: {
    height: 12,
    width: 12,
    borderRadius: 10,
    position: 'absolute',
    left: 4,
    bottom: 4,
    borderStyle: 'solid',
    borderColor: '#f4f6fa',
    backgroundColor: '#3fc7bc',
    zIndex: 1
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  boldText: {
    marginLeft: 5,
    marginEnd:0,
    fontSize: 23,
    color: '#2D3142',
    fontWeight: 'bold',
    lineHeight: 30
  },
  normalText: {
    margin:5,
    marginEnd:80,
    color: '#2D3142',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 24
  },
  detailText: {
    margin: 5,
    color: '#0277bd',
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 18,
    letterSpacing: 0.2
  },
  infoContainer: {
    margin:2,
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 7,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#b3e5fc',
  },
  rowContainer: {
    flexDirection: 'row'
  },
  rowContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnContainer: {
    marginTop:30,
    backgroundColor: 'rgb(133,203,96)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 5,
    width: 70,
    height: 30
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
    fontWeight: 'bold'
  },
  warningBtnContainer: {
    marginTop:30,
    backgroundColor: 'rgb(226,10,18)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 5,
    width: 80,
    height: 30
  },
  warningBtnText: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 12
  },
  questionIcon: {
    alignSelf: 'center',
    width: 30,
    height: 30
  },
  textContainer1: {
    width: 160,
    height:25,
    justifyContent: 'center',
    margin: (0,0,0,10),
    borderWidth:1,
    borderRadius:5, 
    backgroundColor: 'rgb(158,191,249)',
    borderColor: 'rgb(158,191,249)'
  },
  textContainer2:{
    width: 160,
    height:25,
    justifyContent: 'center',
    margin: (0,0,0,10),
    borderWidth:1,
    borderRadius:5, 
    backgroundColor: 'rgb(226,135,247)',
    borderColor: 'rgb(226,135,247)'
  },
  textContainer3: {
    width: 160,
    height:25,
    justifyContent: 'center',
    margin: (0,0,0,10),
    borderWidth:1,
    borderRadius:5, 
    backgroundColor: 'rgb(255,126,121)',
    borderColor: 'rgb(255,126,121)'
  },
  textContainer4: {
    width: 160,
    height:25,
    justifyContent: 'center',
    margin: (0,0,0,10),
    borderWidth:1,
    borderRadius:5, 
    backgroundColor: 'rgb(135,205,99)',
    borderColor: 'rgb(135,205,99)'
  },
  dataConteiner: {
    marginLeft: 10
  },
  mainText: {
    fontSize: 12,
    fontWeight: '700',
    color: 'white',
    textAlign:'center'
  },
  secText: {
    fontSize: 12,
    color: '#9c9eb9'
  },
  ProgressBar: {
    marginTop: 7,
    marginLeft: 10,
    width: '92%',
    borderRadius: 40
  },
  columnContainer: {
    marginTop: 0,
    margin: 10,
    flex: 1,
    alignContent: 'space-between'
  }
});

export default styles;
