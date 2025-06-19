import { Image } from 'expo-image';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Svg, Path } from 'react-native-svg';

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header superior */}
      <View style={styles.headerTop}>
        <MaterialIcons name="notifications-none" size={30} color="#fff" style={styles.notifIcon} />
        <View style={{ flex: 1 }} />
        <View style={styles.darkModeRow}>
          <ThemedText style={styles.darkModeText}>Dark Mode</ThemedText>
          <MaterialIcons name="dark-mode" size={22} color="#000000" style={{ marginLeft: 4 }} />
        </View>
        <CurveRedSVG />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Logo y bienvenida */}
        <View style={styles.logoContainer}>
          <Image source={require('@/assets/images/logo3.png')} style={styles.logo} />
        </View>
        <ThemedText type="subtitle" style={styles.welcomeText}>
          Bienvenido al Sistema{"\n"}Académico
        </ThemedText>
        <View style={styles.userRow}>
          <MaterialIcons name="person" size={20} color="#222" />
          <ThemedText style={styles.userName}>Cristina Colcha</ThemedText>
        </View>
        <Image source={require('@/assets/images/Imagen1.png')} style={styles.bannerImg} />

        {/* Acciones más frecuentes */}
        <ThemedText style={styles.accionesTitle}>ACCIONES MÁS FRECUENTES</ThemedText>
        <View style={styles.actionsGrid}>
          <ActionButton icon="assignment" label="Matrícula" />
          <ActionButton icon="directions-bus" label="Transporte" />
          <ActionButton icon="school" label="Procesos" />
          <ActionButton icon="work" label="Oportunidades" />
          <ActionButton icon="place" label="Croquis UCE" />
          <ActionButton icon="event" label="Actividades" />
          <ActionButton icon="description" label="Apuntes" />
        </View>

        {/* Espacio para la burbuja y colibrí */}
        <View style={{ height: 15 }} />
      </ScrollView>
      {/* Burbuja de ayuda y colibrí sobre curva azul */}
      <View style={styles.bottomContainer} pointerEvents="box-none">
        <BottomBlueCurve />
        <View style={styles.helpBubbleRow}>
          <View style={styles.helpBubble}>
            <ThemedText style={styles.helpBubbleText}>¿Necesitas Ayuda?</ThemedText>
            <View style={styles.bubbleTail} />
          </View>
          <Image source={require('@/assets/images/Imagen2.png')} style={styles.colibriIcon} />
        </View>
      </View>
    </ThemedView>
  );
}

function ActionButton({ icon, label }: { icon: any; label: string }) {
  return (
    <TouchableOpacity style={styles.actionBtn}>
      <MaterialIcons name={icon} size={25} color="#222" />
      <ThemedText style={styles.actionLabel}>{label}</ThemedText>
    </TouchableOpacity>
  );
}

function CurveRedSVG() {
  return (
    <Svg height="40" width="110%" viewBox="0 0 400 40" style={styles.curveSvg}>
      <Path d="M0,20 Q200,10 400,20 L400,40 L0,40 Z" fill="#C62828" />

    </Svg>
  );
}

function BottomBlueCurve() {
  return (
    <Svg height="55" width="100%" viewBox="0 0 400 20" style={{ position: 'absolute', bottom: 0, left: 0 }}>
  <Path
    d="M0,0 Q200,60 400,0 L400,60 L0,60 Z"
    fill="#0076BD"
  />
</Svg>



  );
}

const styles = StyleSheet.create({
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 16,
    backgroundColor: '#0066B1',
    height: 100,
    position: 'relative',
    zIndex: 2,
  },
  notifIcon: {
    position: 'absolute',
    left: 16,
    top: 36,
  },
  curveSvg: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  logoHeader: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    marginHorizontal: 12,
  },
  darkModeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  darkModeText: {
    color: '#000000',
    fontSize: 13,
    marginRight: 4,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#eee',
  },
  welcomeText: {
    textAlign: 'center',
    color: '#1A237E',
    marginTop: 8,
    fontWeight: 'bold',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    marginBottom: 8,
    gap: 4,
  },
  userName: {
    fontSize: 16,
    marginLeft: 4,
    color: '#222',
  },
  bannerImg: {
    width: '90%',
    height: 90,
    alignSelf: 'center',
    borderRadius: 12,
    marginVertical: 10,
    resizeMode: 'cover',
  },
  accionesTitle: {
    marginTop: 10,
    marginLeft: 16,
    fontWeight: 'bold',
    color: '#222',
    fontSize: 15,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  actionBtn: {
    width: 110,
    height: 60,
    backgroundColor: '#EDEDED',
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  actionLabel: {
    fontSize: 13,
    color: '#222',
    marginTop: 6,
    textAlign: 'center',
    fontWeight:'500',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 10,
    justifyContent: 'flex-end',
    zIndex: 20,
  },
  helpBubbleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '103%',
    paddingRight: 15,
    marginBottom: 5,
  },
  helpBubble: {
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginRight: 5,
    maxWidth: 160,
    position: 'relative',
    marginBottom: 35
  },
  
  helpBubbleText: {
    color: '#11',
    fontSize: 10,
  },
  bubbleTail: {
    position: 'absolute',
    right: 10,
    bottom: 0,
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderTopColor: 'transparent',
    borderLeftWidth: 12,
    borderLeftColor: '#E0E0E0',
    borderBottomWidth: 10,
    borderBottomColor: 'transparent',
  },
  colibriIcon: {
    width: 40,
    height: 35,
    resizeMode: 'contain',
    marginBottom: 38,
    marginRight: 0,
  },
});
