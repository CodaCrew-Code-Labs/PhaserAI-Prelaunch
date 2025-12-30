interface SubscribeResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const subscribeToMailerLite = async (
  email: string, 
  groupId?: string
): Promise<SubscribeResponse> => {
  try {
    const apiKey = process.env.REACT_APP_MAILERLITE_API_KEY;
    
    if (!apiKey) {
      console.error('MailerLite API key not found');
      return {
        success: false,
        message: 'Configuration error. Please try again later.'
      };
    }

    const requestBody: any = {
      email: email,
    };

    // Add group if provided
    if (groupId) {
      requestBody.groups = [groupId];
    }

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    const responseData = await response.json();

    if (response.ok) {
      console.log('Subscriber added successfully:', responseData);
      return {
        success: true,
        message: 'Successfully subscribed to the waitlist!',
        data: responseData
      };
    } else {
      console.error('MailerLite API error:', responseData);
      
      // Handle specific error cases
      if (response.status === 422 && responseData.errors?.email) {
        return {
          success: false,
          message: 'This email is already subscribed!'
        };
      }
      
      return {
        success: false,
        message: 'Subscription failed. Please try again.'
      };
    }
  } catch (error) {
    console.error('Network error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.'
    };
  }
};