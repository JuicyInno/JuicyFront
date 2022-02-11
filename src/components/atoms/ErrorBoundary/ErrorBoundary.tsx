import React, { ErrorInfo, ReactNode } from 'react';

interface IProps {
  error: ReactNode;
}

class ErrorBoundary extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error);
    console.log(errorInfo);
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return this.props.error;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
