import json
import re
import requests
import browser_cookie3
import uuid

class Bard:
    def __init__(self, token=None):
        self.token = token
        self._reqid = int("".join(str(uuid.uuid4()).split("-")))
        self.conversation_id = ""
        self.response_id = ""
        self.choice_id = ""
        self.SNlM0e = self._get_snim0e()

    def _get_snim0e(self):
        if self.token is None:
            try:
                cookies = browser_cookie3.chrome(domain_name=".google.com")
                for cookie in cookies:
                    if cookie.name == "__Secure-1PSID":
                        self.token = cookie.value
            except:
                print("Failed to get cookies from Chrome")
                return None

        if self.token is None:
            return None

        headers = {
            "Cookie": f"__Secure-1PSID={self.token}",
        }
        response = requests.get(
            "https://bard.google.com/", headers=headers, timeout=10
        )
        if response.status_code != 200:
            raise Exception("Failed to get Google Bard")
        snim0e = re.search(r"SNlM0e\":\"(.*?)\"", response.text)
        if not snim0e:
            raise Exception("Failed to get Google Bard")
        return snim0e.group(1)

    def ask(self, message):
        params = {
            "bl": "boq_assistant-bard-web-server_20230419.00_p1",
            "_reqid": str(self._reqid),
            "rt": "c",
        }

        message_struct = [
            [message],
            None,
            [self.conversation_id, self.response_id, self.choice_id],
        ]

        data = {
            "f.req": json.dumps([None, json.dumps(message_struct)]),
            "at": self.SNlM0e,
        }

        headers = {
            "Cookie": f"__Secure-1PSID={self.token}",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        }

        response = requests.post(
            "https://bard.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate",
            params=params,
            data=data,
            headers=headers,
            timeout=120,
        )

        if response.status_code != 200:
            raise Exception("Failed to get response from Google Bard")

        chat_data = json.loads(response.content.splitlines()[3])[0][2]
        if not chat_data:
            return "Failed to get response from Google Bard"
        
        json_chat_data = json.loads(chat_data)
        results = {
            "content": json_chat_data[0][0],
            "conversation_id": json_chat_data[1][0],
            "response_id": json_chat_data[1][1],
            "factualityQueries": json_chat_data[3],
            "textQuery": json_chat_data[2][0] if json_chat_data[2] else "",
            "choices": [{"id": i[0], "content": i[1]} for i in json_chat_data[4]],
        }
        self.conversation_id = results["conversation_id"]
        self.response_id = results["response_id"]
        self.choice_id = results["choices"][0]["id"]
        self._reqid += 100000

        return results["content"]

