
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-23 05:20:00", "b": 412.25}, {"a": "2024-10-23 05:25:00", "b": 410.5}, {"a": "2024-10-23 05:30:00", "b": 418.6666666666667}, {"a": "2024-10-23 05:35:00", "b": 417.3333333333333}, {"a": "2024-10-23 05:40:00", "b": 414.6}, {"a": "2024-10-23 05:45:00", "b": 418.0}, {"a": "2024-10-23 05:50:00", "b": 411.0}, {"a": "2024-10-23 05:55:00", "b": 420.2}, {"a": "2024-10-23 06:00:00", "b": 422.75}, {"a": "2024-10-23 06:05:00", "b": 412.0}, {"a": "2024-10-23 06:10:00", "b": 412.75}, {"a": "2024-10-23 06:15:00", "b": 420.2}, {"a": "2024-10-23 06:20:00", "b": 429.0}, {"a": "2024-10-23 06:25:00", "b": 424.0}, {"a": "2024-10-23 06:30:00", "b": 421.8}, {"a": "2024-10-23 06:35:00", "b": 432.25}, {"a": "2024-10-23 06:40:00", "b": 429.2}, {"a": "2024-10-23 06:45:00", "b": 426.6}, {"a": "2024-10-23 06:50:00", "b": 436.2}, {"a": "2024-10-23 06:55:00", "b": 447.8}, {"a": "2024-10-23 07:00:00", "b": 459.75}, {"a": "2024-10-23 07:05:00", "b": 475.4}, {"a": "2024-10-23 07:10:00", "b": 485.0}, {"a": "2024-10-23 07:15:00", "b": 498.0}, {"a": "2024-10-23 07:20:00", "b": 490.0}, {"a": "2024-10-23 07:25:00", "b": 480.5}, {"a": "2024-10-23 07:30:00", "b": 487.0}, {"a": "2024-10-23 07:35:00", "b": 485.8}, {"a": "2024-10-23 07:40:00", "b": 480.8}, {"a": "2024-10-23 07:45:00", "b": 492.6}, {"a": "2024-10-23 07:50:00", "b": 482.6}, {"a": "2024-10-23 07:55:00", "b": 481.6}, {"a": "2024-10-23 08:00:00", "b": 481.6}, {"a": "2024-10-23 08:05:00", "b": 491.8}, {"a": "2024-10-23 08:10:00", "b": 494.6666666666667}, {"a": "2024-10-23 08:15:00", "b": 489.0}, {"a": "2024-10-23 08:20:00", "b": 477.0}, {"a": "2024-10-23 08:25:00", "b": 465.4}, {"a": "2024-10-23 08:30:00", "b": 466.4}, {"a": "2024-10-23 08:35:00", "b": 457.6}, {"a": "2024-10-23 08:40:00", "b": 447.4}, {"a": "2024-10-23 08:45:00", "b": 457.0}, {"a": "2024-10-23 08:50:00", "b": 483.6}, {"a": "2024-10-23 08:55:00", "b": 516.6}, {"a": "2024-10-23 09:00:00", "b": 536.8}, {"a": "2024-10-23 09:05:00", "b": 520.25}, {"a": "2024-10-23 09:10:00", "b": 521.0}, {"a": "2024-10-23 09:15:00", "b": 519.3333333333334}, {"a": "2024-10-23 09:20:00", "b": 510.0}, {"a": "2024-10-23 09:25:00", "b": 509.75}, {"a": "2024-10-23 09:30:00", "b": 499.5}, {"a": "2024-10-23 09:35:00", "b": 482.6}, {"a": "2024-10-23 09:40:00", "b": 480.6}, {"a": "2024-10-23 09:45:00", "b": 478.0}, {"a": "2024-10-23 09:50:00", "b": 463.8}, {"a": "2024-10-23 09:55:00", "b": 468.4}, {"a": "2024-10-23 10:00:00", "b": 468.2}, {"a": "2024-10-23 10:05:00", "b": 467.4}, {"a": "2024-10-23 10:10:00", "b": 468.4}, {"a": "2024-10-23 10:15:00", "b": 466.4}, {"a": "2024-10-23 10:20:00", "b": 476.0}, {"a": "2024-10-23 10:25:00", "b": 465.4}, {"a": "2024-10-23 10:30:00", "b": 459.4}, {"a": "2024-10-23 10:35:00", "b": 437.2}, {"a": "2024-10-23 10:40:00", "b": 424.75}, {"a": "2024-10-23 10:45:00", "b": 439.2}, {"a": "2024-10-23 10:50:00", "b": 444.4}, {"a": "2024-10-23 10:55:00", "b": 444.4}, {"a": "2024-10-23 11:00:00", "b": 435.2}, {"a": "2024-10-23 11:05:00", "b": 439.6}, {"a": "2024-10-23 11:10:00", "b": 440.5}, {"a": "2024-10-23 11:15:00", "b": 425.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    