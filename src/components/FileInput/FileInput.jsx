import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './FileInput.module.scss';
import Dropzone from 'react-dropzone';
import { Icon, Box } from '../';

class FileInput extends Component {
    state = {
        label: ''
    };

    onDrop = (acceptedFiles, rejectedFiles, e) => {
        if (this.props.onChange) {
            this.props.onChange(acceptedFiles, rejectedFiles, e);
        }

        const acceptedName = !!acceptedFiles.length && acceptedFiles[0].name;
        const rejectedName = !!rejectedFiles.length && rejectedFiles[0].name;

        this.setState({
            label: acceptedName || rejectedName || ''
        });
    };

    render() {
        const {
            className,
            success,
            error,
            warning,
            failureMessage,
            name,
            multiple,
            accept,
            disabled
        } = this.props;

        return (
            <Dropzone disabled={disabled} onDrop={this.onDrop} multiple={multiple} accept={accept}>
                {({ getRootProps, getInputProps, isDragActive }) => (
                    <div className={styles.wrapper}>
                        <div
                            className={classnames(styles.dropWrapper, {
                                // [styles.success]: success,
                                [styles.error]: error,
                                [styles.warning]: warning,
                                [styles.messageWrapper]: failureMessage || success,
                                [styles.dragActive]: isDragActive,
                                [styles.disabled]: disabled,
                                [className]: className
                            })}
                            {...getRootProps()}
                        >
                            <input
                                name={name}
                                disabled={disabled}
                                {...getInputProps({
                                    'data-warning': warning,
                                    'data-error': error
                                })}
                            />
                            <Icon name="file" />
                            <p>{disabled ? 'Uploading is disabled' : 'Drop or click to upload your files'}</p>
                        </div>
                        {failureMessage && (warning || error) && (
                            <p className={styles.failureMessage}>{failureMessage}</p>
                        )}
                        {success && <p className={styles.successMessage}>Successfully Uploaded:</p>}
                        {this.state.label && (
                            <Box error={error} className={styles.hasValue}>
                                {this.state.label}
                            </Box>
                        )}
                    </div>
                )}
            </Dropzone>
        );
    }
}

export default FileInput;
