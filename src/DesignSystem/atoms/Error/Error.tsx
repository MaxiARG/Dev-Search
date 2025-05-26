import { View, Text, Pressable } from 'react-native';

interface ErrorScreenProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorScreen = ({
  message = 'Algo salió mal',
  onRetry,
}: ErrorScreenProps) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0d1117',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}
    >
      <Text
        style={{
          color: '#f78166',
          fontSize: 22,
          fontWeight: 'bold',
          marginBottom: 8,
        }}
      >
        Error
      </Text>
      <Text
        style={{
          color: '#c9d1d9',
          fontSize: 16,
          textAlign: 'center',
          marginBottom: 24,
        }}
      >
        {message}
      </Text>
    </View>
  );
};

export default ErrorScreen;
