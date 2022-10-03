export const checkFisrtUse = () => {
    const _isFirst = localStorage.getItem("isfirst")
    if (_isFirst) {
        if (JSON.parse(_isFirst)) {
            return true
        } else {
            return false
        }
    } else {
        // 로컬 스토리지에 데이터가 없음
        localStorage.setItem("isfirst", "true")
        return false
    }
}
