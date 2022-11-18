import {MessageTypeFrom, MessageTypeTo, MessageTypeGroup} from '../utils/consts.js'
import { getToken } from './token.js'

// Map 记录收到的消息，key：消息来源ID，value：消息列表
const receivedMessages = new Map
// 发送消息的用户ID 与 群聊ID 可能重复，所以需要将消息列表map分开
// const receivedGroupMessages = new Map

var instance

export function initWebsocketConnection() {
    const ws = new WebSocket("ws://127.0.0.1:9101/")
    console.log("ws state: ", ws.readyState)
    instance = ws
    instance.onopen = onopen
    instance.onmessage = onmessage
    instance.onerror = onerror
    instance.onclose = onclose
}

let authVerified = false
// open事件：向服务器发送授权信息（token）
const onopen = function(ev) {
    console.log("open event: ", ev)
    let token = getToken()
    if (token == '' || token == null) {
        instance.close(402, 'missing token')
        return
    }
    let authRequest = JSON.stringify({'token': token})
    instance.send(authRequest)
}

// 收到message事件：将消息投递到对应的消息列表中
const onmessage = (event) => {
    let payload = event.data
    console.debug('received message: ', payload)
    // 在收到服务器回复的authResponse之前不能接收消息
    if (!authVerified) {
        let response = JSON.parse(payload)
        if (response.status != 1) {
            instance.close(402, 'authorization failed')
        }else {
            authVerified = true
        }
        return
    }
    let message = JSON.parse(payload)
    switch(message.flag) {
        case MessageTypeFrom: {
            let list = receivedMessages.get(message.from)
            if (list == null || list == undefined) {
                let msgList = [message]
                receivedMessages.set(message.from, msgList)
            }else {
                list.push(message)
            }
            break
        }
        case MessageTypeTo: break
        case MessageTypeGroup: break
        default: break
    }
}

const onerror = function(error) {
    console.error("ws connection error: ", error)

}

const onclose = function(event) {
    console.log('ws connection closed by server: ', event)
}

export function getReceivedMessage(id) {
    let msgList = receivedMessages.get(id)
    if (msgList == null || msgList.length == 0) {
        return []
    }
    return msgList.splice(0, msgList.length)
}