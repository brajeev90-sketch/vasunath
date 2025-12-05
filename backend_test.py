#!/usr/bin/env python3

import requests
import json
import sys
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

def test_contact_api():
    """Test POST /api/contact endpoint with specific data from review request"""
    backend_url = get_backend_url()
    if not backend_url:
        print("❌ Could not get backend URL from frontend/.env")
        return False
    
    url = f"{backend_url}/api/contact"
    
    # Exact data from review request
    test_data = {
        "name": "Test",
        "phone": "123", 
        "email": "test@test.com",
        "requirement_type": "General",
        "message": "Test"
    }
    
    print(f"\n🧪 Testing POST {url}")
    print(f"📤 Request data: {json.dumps(test_data, indent=2)}")
    
    try:
        response = requests.post(url, json=test_data, timeout=30)
        
        print(f"📥 Response status: {response.status_code}")
        print(f"📥 Response headers: {dict(response.headers)}")
        
        if response.status_code == 200:
            response_data = response.json()
            print(f"📥 Response data: {json.dumps(response_data, indent=2)}")
            
            # Verify response contains ID
            if 'id' in response_data and response_data['id']:
                print("✅ Contact API test PASSED - 200 response with ID")
                return True
            else:
                print("❌ Contact API test FAILED - Response missing ID field")
                return False
        else:
            print(f"❌ Contact API test FAILED - Expected 200, got {response.status_code}")
            try:
                error_data = response.json()
                print(f"📥 Error response: {json.dumps(error_data, indent=2)}")
            except:
                print(f"📥 Error response text: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Contact API test FAILED - Request error: {e}")
        return False
    except Exception as e:
        print(f"❌ Contact API test FAILED - Unexpected error: {e}")
        return False

def test_newsletter_api():
    """Test POST /api/newsletter endpoint with specific data from review request"""
    backend_url = get_backend_url()
    if not backend_url:
        print("❌ Could not get backend URL from frontend/.env")
        return False
    
    url = f"{backend_url}/api/newsletter"
    
    # Exact data from review request
    test_data = {
        "name": "Test",
        "email": "test@test.com"
    }
    
    print(f"\n🧪 Testing POST {url}")
    print(f"📤 Request data: {json.dumps(test_data, indent=2)}")
    
    try:
        response = requests.post(url, json=test_data, timeout=30)
        
        print(f"📥 Response status: {response.status_code}")
        print(f"📥 Response headers: {dict(response.headers)}")
        
        if response.status_code == 200:
            response_data = response.json()
            print(f"📥 Response data: {json.dumps(response_data, indent=2)}")
            print("✅ Newsletter API test PASSED - 200 response")
            return True
        else:
            print(f"❌ Newsletter API test FAILED - Expected 200, got {response.status_code}")
            try:
                error_data = response.json()
                print(f"📥 Error response: {json.dumps(error_data, indent=2)}")
            except:
                print(f"📥 Error response text: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Newsletter API test FAILED - Request error: {e}")
        return False
    except Exception as e:
        print(f"❌ Newsletter API test FAILED - Unexpected error: {e}")
        return False

def main():
    """Run all backend API tests"""
    print("=" * 60)
    print("🚀 BACKEND API TESTING - Vasu Nath Enterprises")
    print("=" * 60)
    print(f"⏰ Test started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    backend_url = get_backend_url()
    print(f"🌐 Backend URL: {backend_url}")
    
    if not backend_url:
        print("❌ CRITICAL: Cannot proceed without backend URL")
        sys.exit(1)
    
    # Test results
    results = {}
    
    # Test contact API
    results['contact'] = test_contact_api()
    
    # Test newsletter API  
    results['newsletter'] = test_newsletter_api()
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = sum(results.values())
    total = len(results)
    
    for test_name, passed_test in results.items():
        status = "✅ PASSED" if passed_test else "❌ FAILED"
        print(f"{test_name.upper()} API: {status}")
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 ALL TESTS PASSED!")
        return True
    else:
        print("⚠️  SOME TESTS FAILED!")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)