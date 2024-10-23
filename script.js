
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-22 13:20:00", "b": 469.4}, {"a": "2024-10-22 13:25:00", "b": 456.6}, {"a": "2024-10-22 13:30:00", "b": 471.2}, {"a": "2024-10-22 13:35:00", "b": 462.5}, {"a": "2024-10-22 13:40:00", "b": 463.0}, {"a": "2024-10-22 13:45:00", "b": 475.4}, {"a": "2024-10-22 13:50:00", "b": 474.6}, {"a": "2024-10-22 13:55:00", "b": 456.4}, {"a": "2024-10-22 14:00:00", "b": 453.75}, {"a": "2024-10-22 14:05:00", "b": 457.5}, {"a": "2024-10-22 14:10:00", "b": 453.4}, {"a": "2024-10-22 14:15:00", "b": 448.2}, {"a": "2024-10-22 14:20:00", "b": 447.3333333333333}, {"a": "2024-10-22 14:25:00", "b": 445.0}, {"a": "2024-10-22 14:30:00", "b": 461.6}, {"a": "2024-10-22 14:35:00", "b": 475.8}, {"a": "2024-10-22 14:40:00", "b": 470.8}, {"a": "2024-10-22 14:45:00", "b": 463.8}, {"a": "2024-10-22 14:50:00", "b": 463.6}, {"a": "2024-10-22 14:55:00", "b": 480.8}, {"a": "2024-10-22 15:00:00", "b": 504.8}, {"a": "2024-10-22 15:05:00", "b": 501.0}, {"a": "2024-10-22 15:10:00", "b": 501.25}, {"a": "2024-10-22 15:15:00", "b": 481.4}, {"a": "2024-10-22 15:20:00", "b": 497.4}, {"a": "2024-10-22 15:25:00", "b": 500.2}, {"a": "2024-10-22 15:30:00", "b": 494.4}, {"a": "2024-10-22 15:35:00", "b": 526.4}, {"a": "2024-10-22 15:40:00", "b": 546.0}, {"a": "2024-10-22 15:45:00", "b": 536.75}, {"a": "2024-10-22 15:50:00", "b": 526.6}, {"a": "2024-10-22 15:55:00", "b": 568.6}, {"a": "2024-10-22 16:00:00", "b": 704.8}, {"a": "2024-10-22 16:05:00", "b": 635.8}, {"a": "2024-10-22 16:10:00", "b": 718.8}, {"a": "2024-10-22 16:15:00", "b": 783.4}, {"a": "2024-10-22 16:20:00", "b": 662.2}, {"a": "2024-10-22 16:25:00", "b": 596.4}, {"a": "2024-10-22 16:30:00", "b": 577.75}, {"a": "2024-10-22 16:35:00", "b": 592.0}, {"a": "2024-10-22 16:40:00", "b": 615.0}, {"a": "2024-10-22 16:45:00", "b": 687.4}, {"a": "2024-10-22 16:50:00", "b": 750.4}, {"a": "2024-10-22 16:55:00", "b": 706.5}, {"a": "2024-10-22 17:00:00", "b": 649.6}, {"a": "2024-10-22 17:05:00", "b": 559.8}, {"a": "2024-10-22 17:10:00", "b": 564.4}, {"a": "2024-10-22 17:15:00", "b": 576.8}, {"a": "2024-10-22 17:20:00", "b": 579.75}, {"a": "2024-10-22 17:25:00", "b": 592.0}, {"a": "2024-10-22 17:30:00", "b": 611.6666666666666}, {"a": "2024-10-22 17:35:00", "b": 612.0}, {"a": "2024-10-22 17:40:00", "b": 643.0}, {"a": "2024-10-22 17:45:00", "b": 608.6}, {"a": "2024-10-22 17:50:00", "b": 598.75}, {"a": "2024-10-22 17:55:00", "b": 605.6}, {"a": "2024-10-22 18:00:00", "b": 598.3333333333334}, {"a": "2024-10-22 18:05:00", "b": 583.0}, {"a": "2024-10-22 18:10:00", "b": 575.5}, {"a": "2024-10-22 18:15:00", "b": 580.8}, {"a": "2024-10-22 18:20:00", "b": 593.25}, {"a": "2024-10-22 18:25:00", "b": 596.8}, {"a": "2024-10-22 18:30:00", "b": 608.2}, {"a": "2024-10-22 18:35:00", "b": 602.75}, {"a": "2024-10-22 18:40:00", "b": 611.5}, {"a": "2024-10-22 18:45:00", "b": 607.6}, {"a": "2024-10-22 18:50:00", "b": 631.0}, {"a": "2024-10-22 18:55:00", "b": 666.25}, {"a": "2024-10-22 19:00:00", "b": 669.8}, {"a": "2024-10-22 19:05:00", "b": 659.5}, {"a": "2024-10-22 19:10:00", "b": 659.4}, {"a": "2024-10-22 19:15:00", "b": 654.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    