
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-23 03:00:00", "b": 407.5}, {"a": "2024-10-23 03:05:00", "b": 408.5}, {"a": "2024-10-23 03:10:00", "b": 410.8}, {"a": "2024-10-23 03:15:00", "b": 409.75}, {"a": "2024-10-23 03:20:00", "b": 408.6666666666667}, {"a": "2024-10-23 03:25:00", "b": 408.0}, {"a": "2024-10-23 03:30:00", "b": 409.0}, {"a": "2024-10-23 03:35:00", "b": 415.8}, {"a": "2024-10-23 03:40:00", "b": 409.4}, {"a": "2024-10-23 03:45:00", "b": 409.8}, {"a": "2024-10-23 03:50:00", "b": 411.8}, {"a": "2024-10-23 03:55:00", "b": 407.0}, {"a": "2024-10-23 04:00:00", "b": 408.3333333333333}, {"a": "2024-10-23 04:05:00", "b": 409.5}, {"a": "2024-10-23 04:10:00", "b": 409.2}, {"a": "2024-10-23 04:15:00", "b": 410.75}, {"a": "2024-10-23 04:20:00", "b": 409.25}, {"a": "2024-10-23 04:25:00", "b": 415.5}, {"a": "2024-10-23 04:30:00", "b": 427.4}, {"a": "2024-10-23 04:35:00", "b": 426.6}, {"a": "2024-10-23 04:40:00", "b": 419.0}, {"a": "2024-10-23 04:45:00", "b": 427.0}, {"a": "2024-10-23 04:50:00", "b": 422.6}, {"a": "2024-10-23 04:55:00", "b": 426.3333333333333}, {"a": "2024-10-23 05:00:00", "b": 424.75}, {"a": "2024-10-23 05:05:00", "b": 429.0}, {"a": "2024-10-23 05:10:00", "b": 425.2}, {"a": "2024-10-23 05:15:00", "b": 420.6666666666667}, {"a": "2024-10-23 05:20:00", "b": 412.25}, {"a": "2024-10-23 05:25:00", "b": 410.5}, {"a": "2024-10-23 05:30:00", "b": 418.6666666666667}, {"a": "2024-10-23 05:35:00", "b": 417.3333333333333}, {"a": "2024-10-23 05:40:00", "b": 414.6}, {"a": "2024-10-23 05:45:00", "b": 418.0}, {"a": "2024-10-23 05:50:00", "b": 411.0}, {"a": "2024-10-23 05:55:00", "b": 420.2}, {"a": "2024-10-23 06:00:00", "b": 422.75}, {"a": "2024-10-23 06:05:00", "b": 412.0}, {"a": "2024-10-23 06:10:00", "b": 412.75}, {"a": "2024-10-23 06:15:00", "b": 420.2}, {"a": "2024-10-23 06:20:00", "b": 429.0}, {"a": "2024-10-23 06:25:00", "b": 424.0}, {"a": "2024-10-23 06:30:00", "b": 421.8}, {"a": "2024-10-23 06:35:00", "b": 432.25}, {"a": "2024-10-23 06:40:00", "b": 429.2}, {"a": "2024-10-23 06:45:00", "b": 426.6}, {"a": "2024-10-23 06:50:00", "b": 436.2}, {"a": "2024-10-23 06:55:00", "b": 447.8}, {"a": "2024-10-23 07:00:00", "b": 459.75}, {"a": "2024-10-23 07:05:00", "b": 475.4}, {"a": "2024-10-23 07:10:00", "b": 485.0}, {"a": "2024-10-23 07:15:00", "b": 498.0}, {"a": "2024-10-23 07:20:00", "b": 490.0}, {"a": "2024-10-23 07:25:00", "b": 480.5}, {"a": "2024-10-23 07:30:00", "b": 487.0}, {"a": "2024-10-23 07:35:00", "b": 485.8}, {"a": "2024-10-23 07:40:00", "b": 480.8}, {"a": "2024-10-23 07:45:00", "b": 492.6}, {"a": "2024-10-23 07:50:00", "b": 482.6}, {"a": "2024-10-23 07:55:00", "b": 481.6}, {"a": "2024-10-23 08:00:00", "b": 481.6}, {"a": "2024-10-23 08:05:00", "b": 491.8}, {"a": "2024-10-23 08:10:00", "b": 494.6666666666667}, {"a": "2024-10-23 08:15:00", "b": 489.0}, {"a": "2024-10-23 08:20:00", "b": 477.0}, {"a": "2024-10-23 08:25:00", "b": 465.4}, {"a": "2024-10-23 08:30:00", "b": 466.4}, {"a": "2024-10-23 08:35:00", "b": 457.6}, {"a": "2024-10-23 08:40:00", "b": 447.4}, {"a": "2024-10-23 08:45:00", "b": 457.0}, {"a": "2024-10-23 08:50:00", "b": 483.6}, {"a": "2024-10-23 08:55:00", "b": 516.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    