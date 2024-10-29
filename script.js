
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-29 10:10:00", "b": 543.8}, {"a": "2024-10-29 10:15:00", "b": 532.6}, {"a": "2024-10-29 10:20:00", "b": 528.6}, {"a": "2024-10-29 10:25:00", "b": 531.25}, {"a": "2024-10-29 10:30:00", "b": 529.25}, {"a": "2024-10-29 10:35:00", "b": 527.6}, {"a": "2024-10-29 10:40:00", "b": 509.0}, {"a": "2024-10-29 10:45:00", "b": 511.0}, {"a": "2024-10-29 10:50:00", "b": 516.8}, {"a": "2024-10-29 10:55:00", "b": 504.6}, {"a": "2024-10-29 11:00:00", "b": 495.6}, {"a": "2024-10-29 11:05:00", "b": 505.0}, {"a": "2024-10-29 11:10:00", "b": 512.0}, {"a": "2024-10-29 11:15:00", "b": 508.3333333333333}, {"a": "2024-10-29 11:20:00", "b": 506.6}, {"a": "2024-10-29 11:25:00", "b": 507.75}, {"a": "2024-10-29 11:30:00", "b": 513.0}, {"a": "2024-10-29 11:35:00", "b": 515.25}, {"a": "2024-10-29 11:40:00", "b": 510.6}, {"a": "2024-10-29 11:45:00", "b": 499.0}, {"a": "2024-10-29 11:50:00", "b": 493.5}, {"a": "2024-10-29 11:55:00", "b": 494.8}, {"a": "2024-10-29 12:00:00", "b": 476.25}, {"a": "2024-10-29 12:05:00", "b": 479.5}, {"a": "2024-10-29 12:10:00", "b": 497.2}, {"a": "2024-10-29 12:15:00", "b": 490.4}, {"a": "2024-10-29 12:20:00", "b": 475.8}, {"a": "2024-10-29 12:25:00", "b": 481.75}, {"a": "2024-10-29 12:30:00", "b": 463.0}, {"a": "2024-10-29 12:35:00", "b": 460.0}, {"a": "2024-10-29 12:40:00", "b": 460.0}, {"a": "2024-10-29 12:45:00", "b": 471.8}, {"a": "2024-10-29 12:50:00", "b": 477.0}, {"a": "2024-10-29 12:55:00", "b": 473.6}, {"a": "2024-10-29 13:00:00", "b": 465.8}, {"a": "2024-10-29 13:05:00", "b": 457.2}, {"a": "2024-10-29 13:10:00", "b": 456.5}, {"a": "2024-10-29 13:15:00", "b": 461.6}, {"a": "2024-10-29 13:20:00", "b": 461.4}, {"a": "2024-10-29 13:25:00", "b": 459.8}, {"a": "2024-10-29 13:30:00", "b": 455.5}, {"a": "2024-10-29 13:35:00", "b": 449.0}, {"a": "2024-10-29 13:40:00", "b": 453.8}, {"a": "2024-10-29 13:45:00", "b": 436.0}, {"a": "2024-10-29 13:50:00", "b": 446.3333333333333}, {"a": "2024-10-29 13:55:00", "b": 446.75}, {"a": "2024-10-29 14:00:00", "b": 440.4}, {"a": "2024-10-29 14:05:00", "b": 450.4}, {"a": "2024-10-29 14:10:00", "b": 437.0}, {"a": "2024-10-29 14:15:00", "b": 430.8}, {"a": "2024-10-29 14:20:00", "b": 435.8}, {"a": "2024-10-29 14:25:00", "b": 438.2}, {"a": "2024-10-29 14:30:00", "b": 451.6}, {"a": "2024-10-29 14:35:00", "b": 439.4}, {"a": "2024-10-29 14:40:00", "b": 424.0}, {"a": "2024-10-29 14:45:00", "b": 426.4}, {"a": "2024-10-29 14:50:00", "b": 423.6666666666667}, {"a": "2024-10-29 14:55:00", "b": 426.6}, {"a": "2024-10-29 15:00:00", "b": 426.6}, {"a": "2024-10-29 15:05:00", "b": 421.6}, {"a": "2024-10-29 15:10:00", "b": 421.2}, {"a": "2024-10-29 15:15:00", "b": 422.5}, {"a": "2024-10-29 15:20:00", "b": 428.8}, {"a": "2024-10-29 15:25:00", "b": 430.5}, {"a": "2024-10-29 15:30:00", "b": 414.2}, {"a": "2024-10-29 15:35:00", "b": 413.0}, {"a": "2024-10-29 15:40:00", "b": 411.8}, {"a": "2024-10-29 15:45:00", "b": 412.8}, {"a": "2024-10-29 15:50:00", "b": 414.6}, {"a": "2024-10-29 15:55:00", "b": 416.8}, {"a": "2024-10-29 16:00:00", "b": 414.0}, {"a": "2024-10-29 16:05:00", "b": 411.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    